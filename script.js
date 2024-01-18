/* Exercise 1: Wish list */
// live server

function addToList(item) {
    
    $('#items').append("<li>" + item + "<span class='label pending'>Pending</span></li>")
    var li_node = $(this).parent();
    console.log(li_node)
    updateTotal()
}

$(document).on('click', '#add-to-list', function() {
    addToList($("#item").val())

    $("#item").focus()
});

$(document).on('click', '.pending', function() {
    var li_node = $(this).parent();
    // console.log(li_node)
    li_node.append("<span class='label success'>Success</span>")
    $(this).remove()
    li_node.addClass('completed');
    updateTotal()
    // $("#item").focus()
});

function updateTotal() {
    var pending = $(".pending").length
    console.log(pending)
    var completed = $(".completed").length
    console.log(completed)
    console.log('Pending: ' + pending + ' Completed: ' + completed)
}