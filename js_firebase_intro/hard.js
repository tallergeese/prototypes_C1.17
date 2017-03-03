// harder Firebase Intro Prototype js file

var config = {
    apiKey: "AIzaSyCs2tshucLM_4UyGY1F386WEve0NDGzvh4",
    authDomain: "lfzdemo-545e5.firebaseapp.com",
    databaseURL: "https://lfzdemo-545e5.firebaseio.com",
    storageBucket: "lfzdemo-545e5.appspot.com",
    messagingSenderId: "257142149994"
}
firebase.initializeApp(config);
var fbRef = firebase.database();

function getAllStudentData(){
    fbRef.ref('students').on('value', function(snapshot){
        updateDom(snapshot.val());
})};

function updateDom(d){
    var table = $('.sgt tbody');
    table.html('');
    for(var key in d){
        if(d.hasOwnProperty(key)){
            var row = $('<tr>').attr("key", key);
            var id = $('<td class="sid">' + d[key].student_id + '</td>');
            var name = $('<td class="sname">' + d[key].student_name + '</td>');
            var course = $('<td class="course">' + d[key].course + '</td>');
            var grade = $('<td class="grade">' + d[key].grade + '</td>');
            var actions = $('<td>', {'data-uid': key});
            var edit = $('<button>', {
                class: 'btn btn-sm btn-info edit',
                text: 'Edit'
                });
            var del = $('<button>', {
                class: 'btn btn-sm btn-danger delete',
                text: 'Delete'});
            deleteButtonHandler(del, key);
            editButtonHandler(edit, key);
        }
    table.append(row.append(id, name, course, grade, actions.append(edit, del)));
    }
}

function sendFormData(){
    fbRef.ref('students').push(getFormData());
    clearForm();
}

function updateStudent(path, update){
    fbRef.ref(path).update(update);
}

function deleteButtonHandler(del, key){
    var path = 'students/' + key;
    $(del).click(function(){
        var confirmAns = confirm('Are you sure you would like to remove this student? All delete operations are PERMANENT. Press "Confirm" to continue.');
        if (confirmAns){
        fbRef.ref(path).remove();
        }
    })
}

function editButtonHandler(edit, key){
    var path = 'students/' + key;
    $(edit).click(function(event){
        var student = getRowData($(event.target).parents('tr'));
        populateFormData(student.sid, student.sname, student.course, student.grade);
        addUpdateButtonSwitch(path);
    })
}

function addUpdateButtonSwitch(path){
    $('#add-student').removeClass("btn-success delete").addClass("btn-warning update").text('Update Student').off().on("click", function(){
        var update = getFormData();
        updateStudent(path, update);
        resetAddStudentButton();
        clearForm();
    });
    $('#clear-form').on("click", resetAddStudentButton);

}

function resetAddStudentButton(){
    $('#add-student').removeClass("btn-warning update").addClass("btn-success delete").text('Add Student').off().on("click", function(){
            sendFormData();
            $('#clear-form').off("click", resetAddStudentButton);
        })
}

function clearForm(){
    $('.sgt-form input').each(function(k, v){
        $(v).val('');
    });
}

function getFormData(){
    var output = {};
    $('.sgt-form input').each(function(k, v){
        var ele = $(v);
        output[ele.attr('id')] = ele.val();
    });
    return output;
}

function populateFormData(sid, sname, course, grade){
    $('#student_id').val(sid);
    $('#student_name').val(sname);
    $('#course').val(course);
    $('#grade').val(grade);
}

function getRowData(e) {
    return {
        sid: e.find('.sid').text(),
        sname: e.find('.sname').text(),
        course: e.find('.course').text(),
        grade: e.find('.grade').text()
    };
}

function addButtonHandlers(){
    $('#add-student').click(function(){
        sendFormData();
    });
    $('#clear-form').click(clearForm);
}

$(document).ready(function(){
    addButtonHandlers();
    getAllStudentData();
})