$(document).ready(function () {
    $("#hide1").hide();
    $("#design-img").click(function () {
        $("#design-img").toggle('1000').hide('1000');
        $("#hide1").show("1000");
    });
    $("#hide1").click(function () {
        $("#hide1").toggle('1500');
        $("#design-img").toggle('1500');
    });

$("#hide2").hide();
$("#dev-img").click(function () {
    $("#dev-img").toggle('1000').hide('1000');
    $("#hide2").show("1000");
});
$("#hide2").click(function () {
    $("#hide2").toggle('1500');
    $("#dev-img").toggle('1500');
});
$("#hide3").hide();
$("#pro-img").click(function () {
    $("#pro-img").toggle('1000').hide('1000');
    $("#hide3").show("1000");
});
$("#hide3").click(function () {
    $("#hide3").toggle('1500');
    $("#pro-img").toggle('1500');
});
});

$(document).ready(function () {
    $("#works1-p").hide();
    $("#work1").mouseover(function () {
        $("#works1-p").show();
    }).mouseout(function () {
        $("#works1-p").hide();
    });
});
$(document).ready(function () {
    $("#works2-p").hide();
    $("#work2").mouseover(function () {
        $("#works2-p").show();
    }).mouseout(function () {
        $("#works2-p").hide();
    });
});
$(document).ready(function () {
    $("#works3-p").hide();
    $("#work3").mouseover(function () {
        $("#works3-p").show()
    }).mouseout(function () {
        $("#works3-p").hide();
    });
});
$(document).ready(function () {
    $("#works4-p").hide();
    $("#work4").mouseover(function () {
        $("#works4-p").show();
    }).mouseout(function () {
        $("#works4-p").hide();
    });
});
$(document).ready(function () {
    $("#works5-p").hide();
    $("#work5").mouseover(function () {
        $("#works5-p").show();
    }).mouseout(function () {
        $("#works5-p").hide();
    });
});
$(document).ready(function () {
    $("#works6-p").hide();
    $("#work6").mouseover(function () {
        $("#works6-p").show();
    }).mouseout(function () {
        $("#works6-p").hide();
    });
});
$(document).ready(function () {
    $("#works7-p").hide();
    $("#work7").mouseover(function () {
        $("#works7-p").show();
    }).mouseout(function () {
        $("#works7-p").hide();
    });
});
$(document).ready(function () {
    $("#works8-p").hide();
    $("#work8").mouseover(function () {
        $("#works8-p").show();
    }).mouseout(function () {
        $("#works8-p").hide();
    });
})

//email set up
function alertSubmision() {
    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let message = document.getElementById("Message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill the form for so as to reach unto us!!");
    } else {
        alert(name + " we have received your message. Thank you for reaching out to us.");
    };

    let form = document.createElement("emails")[0];
    form.reset();
    return false;
}