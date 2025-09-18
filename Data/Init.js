let searchParams = new URLSearchParams(window.location.search);
let searchKeyword = searchParams.get("u");
document.addEventListener("DOMContentLoaded", function () {
    // Load header
    fetch("/pbem/HTML/header.html")
        .then((res) => res.text())
        .then((html) => {
            document.body.insertAdjacentHTML("afterbegin", html);

            requireAjax("/pbem/Data/src/settings.js", function () {
                requireAjax("/pbem/Data/src/dataloader.js", function () {
                    requireAjax("/pbem/Data/src/tooltips.js", function () {
                        requireAjax("/pbem/Data/src/lookuputils.js", function () {
                            requireAjax("/pbem/Data/Search.js", function () {
                                requireAjax("/pbem/Data/Faction.js", function () {
                                    requireAjax("/pbem/Data/Builder.js", function () {
                                        CheckData();
                                        // wait for a while and then  HandleExtraTooltips();
                                        setTimeout(function () {
                                            HandleExtraTooltips();
                                        }, 2000);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
});

function requireAjax(file, callback) {
    jQuery.getScript(file, callback);
}
