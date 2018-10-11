<!DOCTYPE html>
<html>
<body>
<form class="test-form">
    <input name="first-name" type="text" data-validation="alphabetical" />
    <input name="age" type="text" data-validation="numeric" />
</form>>

<script>
let form = document.querySelector('.test-form');

beforeEach(function () {
    form = form.cloneNode(true);
});
</script>

</body>
</html>
