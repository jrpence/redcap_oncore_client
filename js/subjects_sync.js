$(function() {
    $('select[name="oncore_subject_link_record_id"]').select2({ width: '100%' });

    $('.oncore-subject-link-btn').click(function() {
        $('input[name="oncore_subject_link_entity_id"]').val($(this).data('entity_id'));
    });
});
