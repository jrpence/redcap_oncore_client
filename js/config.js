$(function() {
    var $modal = $('#external-modules-configure-modal');

    $modal.on('show.bs.modal', function() {
        // Making sure we are overriding this modules's modal only.
        if ($(this).data('module') !== onCoreClient.modulePrefix) {
            return;
        }

        if (typeof ExternalModules.Settings.prototype.resetConfigInstancesOld === 'undefined') {
            ExternalModules.Settings.prototype.resetConfigInstancesOld = ExternalModules.Settings.prototype.resetConfigInstances;
        }

        ExternalModules.Settings.prototype.resetConfigInstances = function() {
            ExternalModules.Settings.prototype.resetConfigInstancesOld();

            if ($modal.data('module') !== onCoreClient.modulePrefix) {
                return;
            }

            if (typeof onCoreClient.protocols === 'undefined') {
                $modal.find('.modal-footer').remove();
                $modal.find('.modal-body').html(onCoreClient.msg);

                return;
            }

            $.each(onCoreClient.protocols, function(no, title) {
                var selected = no === onCoreClient.protocolNo ? ' selected' : '';
                $('[name="protocol_no"]').append('<option value="' + no + '"' + selected + '>' + title + '</option>');
            });

            $('[name="protocol_no"]').select2();
        }
    });
});
