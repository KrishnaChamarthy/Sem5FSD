let page = "Register";

if (page === "Login") {
  $(".email-element").hide();
  $(".confirm-password-element").hide();
  $(".mobile-element").hide();
  $(".title").text("Student Login");
} else {
  $(".email-element").show();
  $(".confirm-password-element").show();
  $(".mobile-element").show();
  $(".title").text("Student Register");
}

$("#btn").on("click", function (event) {
  event.preventDefault();
  let username = $("#username-input").val().trim();
  let email = $("#email-input").val().trim();
  let password = $("#password-input").val().trim();
  let confirm_password = $("#confirm-password-input").val().trim();
  let mobile = $("#mobile-input").val().trim();

  let output = $("#output");
  let hasError = false; 

  $(".username").removeClass("invalid valid");
  $(".email").removeClass("invalid valid");
  $(".mobile").removeClass("invalid valid");
  $(".password").removeClass("invalid valid");
  $(".confirm-password").removeClass("invalid valid");
  if (!username) {
    $(".username").addClass("invalid");
    hasError = true;
  } else {
    $(".username").addClass("valid");
  }

  if (page === "Register") {
    if (!email) {
      $(".email").addClass("invalid");
      hasError = true;
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      output.text("Email Error");
      $(".email").addClass("invalid");
      return;
    } else {
      $(".email").addClass("valid");
    }

    if (!mobile) {
      $(".mobile").addClass("invalid");
      hasError = true;
    } else if (mobile.length != 10 || !/^\d+$/.test(mobile)) {
      output.text("Mobile No. Error");
      $(".mobile").addClass("invalid");
      return;
    } else {
      $(".mobile").addClass("valid");
    }

    if (!confirm_password) {
      $(".confirm-password").addClass("invalid");
      hasError = true;
    } else if (confirm_password !== password) {
      output.text("Confirm Password Error");
      $(".confirm-password").addClass("invalid");
      return;
    } else {
      $(".confirm-password").addClass("valid");
    }
  }

  if (!password) {
    $(".password").addClass("invalid");
    hasError = true;
  } else if (
    password.length <= 7 ||
    !/^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@])[A-Za-z\d&$#@]{7,}$/.test(password)
  ) {
    output.text("Password Error");
    $(".password").addClass("invalid");
    return;
  } else {
    $(".password").addClass("valid");
  }

  if (hasError) {
    output.text("Please fix errors.");
  } else {
    output.text(page === "Login" ? "Logged In Successfully" : "Registered Successfully");
  }
});

$(".login-register").on("click", function (event) {
  var buttonText = $(this).text();
  $(".username").removeClass("invalid valid");
  $(".email").removeClass("invalid valid");
  $(".mobile").removeClass("invalid valid");
  $(".password").removeClass("invalid valid");
  $(".confirm-password").removeClass("invalid valid");
  $("#output").text("");
  if (buttonText === "Login") {
    $(this).text("Register");
    page = "Register";
    $(".email-element").show();
    $(".confirm-password-element").show();
    $(".mobile-element").show();
    $(".title").text("Student Register");
  } else {
    $(this).text("Login");
    page = "Login";
    $(".email-element").hide();
    $(".confirm-password-element").hide();
    $(".mobile-element").hide();
    $(".title").text("Student Login");
  }
});