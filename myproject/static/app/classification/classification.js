app.controller("ClassificationCtrl", function ($scope) {
    $scope.texts = {
        "general": ["Hành khách la hét trên chiếc xe buýt gặp nạn, 4 người nhập viện",
        "Người hút thuốc lá nên ăn táo, cà chua mỗi ngày",
        "Facebook gửi thông báo khi ảnh người dùng bị đăng tải lên mạng"],
        "bank": ["Tôi rất thích cách phục vụ của nhân viên BIDV"]
    };
    $scope.samples = $scope.texts["general"];
    $scope.domains = ["general", "bank"];
    $scope.domain = "general";
    $scope.text = "Việt Nam hạ Indonesia 3-0, rộng cửa vào bán kết U18 Đông Nam Á. Cả Việt Nam lẫn Indonesia đang có hai chiến thắng, và chia nhau hai vị trí dẫn đầu bảng B. Vì thế, cuộc đối đầu giữa hai đội được xem như trận quyết định đến ngôi đầu bảng.";
    $scope.$watch("domain", function (domain) {
        $scope.text = $scope.texts[domain];
        $scope.tag = "";
    });
    var generateOutput = function () {
        $scope.tag = "";
        $.ajax({
            type: "POST",
            url: "../classification",
            data: JSON.stringify({
                "text": $scope.text,
                "domain": $scope.domain
            }),
            contentType: 'application/json'
        }).done(function (data) {
            try {
                console.log(data);
                $scope.tag = data["output"][0];
                $scope.$apply();
            } catch (e) {
                console.log(e);
            }
        }).fail(function () {
        });
    };

    $scope.do = function () {
        generateOutput();
    };

    $scope.init = function () {
        $scope.tag = "";
        $scope.do();
    };
    $scope.init();
});
