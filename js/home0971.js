const fpPromiseMain = import('https://openfpcdn.io/fingerprintjs/v3')
        .then(FingerprintJS => FingerprintJS.load());

updateAccessLinkClickStatistic = function (linkId, url) {
    console.log(linkId, url);
    fpPromiseMain.then(fp => fp.get()).then(result => {
        const visitorId = result.visitorId;
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/Home/UpdateLinkClickStatistic", true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({
                LinkId: linkId,
                Ip: visitorId
            }));
    });
    let a = document.createElement('a');
    a.target = '_blank';
    a.href = url;
    a.click();
}


expandArticle = function () {
    $("#expand-container").addClass('expanded');
}

checkDomain = function () {
    var domain = $("#txt-check-domain").val();
    $.ajax({
        type: "POST",
        url: "/home/CheckOfficialDomain",
        data: { DomainValue: domain },
        success: function (res) {
            if (res && res == 1) {
                $('#goodModalCenter').modal({ keyboard: false })
                $('#goodModalCenter').modal('show');
                $('#good-domain').html(domain);
            } else {
                $('#badModalCenter').modal({ keyboard: false })
                $('#badModalCenter').modal('show');
                $('#bad-domain').html(domain);
            }
        },
        dataType: "json"
    });

};


