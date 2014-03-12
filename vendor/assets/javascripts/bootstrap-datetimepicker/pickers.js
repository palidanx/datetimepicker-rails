jQuery( document ).ready(function( $ ) {
    $('.datepicker').datetimepicker({
        pickTime: false
    });
});

jQuery( document ).ready(function( $ ) {
    $('.datetimepicker').datetimepicker({
        pickSeconds: false
    });
});

jQuery( document ).ready(function( $ ) {
    $('.timepicker').datetimepicker({
        pickDate: false,
        pickSeconds: false,
        pick12HourFormat: true
    });
});
