(function() {

    var translations = null;
    var lang = 'en';

    var translate = function(value) {
        return translations[lang][value];
    };

    var translatePage = function() {
        $(".translated").each(function(){
            $(this).html(translate($(this).attr('id')));
        });
    };

    var loadTranslationFile = function() {
        var url = lang+".json";

        return $.ajax({
            url: url,
            success: function(data, status, xhr) {
                translations = data;
                translatePage();
            },
            error : function(xhr, status, error) {
                translations = {};
            },
            dataType: "json"
        });
    };

    var changeLang = function(langage) {
        lang = langage;
        loadTranslationFile();
    };

    $("button").click(function() {
        changeLang($(this).attr('id'));
    });

    changeLang(lang);

})();
