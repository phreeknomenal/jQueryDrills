// Checks for DOM ready.
$(document).ready(function () {
    // Set variables
    let $btnSubmit = $('#btnSubmit');
    let $textInput = $('#textInput');

    $('body').append('<div id="box1"></div>');
    $('body').append('<ul id="list1"></ul>');

    // Set submit to disabled. 
    $btnSubmit.prop('disabled', true);
    // Activate submit button when values are input.
    $textInput.keydown(() => {
        if ($textInput.val() !== '') {
            $btnSubmit.prop('disabled', false);
        }
    });


    // Button click funtion
    $btnSubmit.click(function () {
        // Checks if text input is empty
        if ($textInput.val() == '') {
            $btnSubmit.prop('disabled', true);
            // runs if text input is not empty.
        } else {
            // $('div#box1').append('<h3>Weeeeee!</h3>');
            $('ul#list1').append(`<li class="item">${$textInput.val()}</li>`)
            // alert($textInput.val());
        }

        const myColors = ['#18229c', '#173e3a', '#7c8a43', '#abf50f', '#3fed8d', '#66a47d', '#6f4055', '#1f216c'];

        // Randomly selects an index from myColors, assigns value to myRandomColor
        const getRandomColor = () => {
            const myRandomColor = myColors[Math.floor(Math.random() * myColors.length)];
            return myRandomColor;
        }

        // click event handler on <li>
        $('li').click((e) => {
            const thisRandomColor = getRandomColor();
            $(e.target).css('background-color', thisRandomColor);
        });

        // double click event handler on <li>
        $('li').dblclick((e) => {
            $(e.target).remove();
        });
    });





    // // .click() event handler method on #btnSubmit
    // $('#btnSubmit').click(function () {
    //     if($('#inputTxt').val() !== '') {
    //         alert('uh oh!');
    //     } else {
    //         $(this).prop('disabled', true)
    //     }
    //     // alert($('#inputText').val());
    // })
});