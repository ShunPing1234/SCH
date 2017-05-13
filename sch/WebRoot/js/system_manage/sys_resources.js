/**
 * @author 李龙雨
 * @date: 2017/4/27 22:25
 * @version 0.1
 */
function initTable() {
    var queryUrl = 'resources!findAll.action';
    $('#para_table').bootstrapTable('destroy');
    $table = $('#para_table').bootstrapTable({
        method: 'post',
        contentType: "application/x-www-form-urlencoded",
        url: queryUrl,
        pagination: true,
        pageSize: 5,
        // pageList:[2,5,10],
        queryParamsType: 'limit',
        // queryParams:queryParams(this),
        search: true, //显示 搜索框
        showColumns: false, //不显示下拉框（选择显示的列）
        sidePagination: "client", //客户端请求
        columns: [{
            field: 'resourceName',
            title: '资源名称',
            width: 100,
            align: 'center',
            sortable: true
        }, {
            field: 'resourceParent',
            title: '父节点',
            width: 100,
            align: 'center',
            sortable: true
        }, {
            field: 'resourcePath',
            title: '地址',
            width: 200,
            align: 'center',
            sortable: true
        },{
            field: 'resourceId',
            title: '操作',
            width: 140,
            align: 'center'
            // formatter: function (value, row, index) {
            //     var e = '<button id="reset_pad_' + value + '" type="button" class="btn btn-default  btn-xs" style="margin-right:15px;" onclick="update_isuse(' + value + ',1)">重置密码</button>';
            //     var d = '<button id="update_' + value + '" type="button" class="btn btn-default  btn-xs"  style="margin-right:15px;" onclick="update_isuse(' + value + ',2)">过期</a> ';
            //     return e + d;
            // }
        }],
        // onDblClickRow: function (row, $element, id) {
        //     $("#people_name").val(row.lwOptPersonnel.personnelName)
        //     $("#login_name").val(row.loginName);
        //     $("#loginId").val(row.loginId);
        //     if (row.lwOptPersonnel.personnelSex == "男") {
        //         $("input[name=optionsRadiosinline]").get(0).checked = true;
        //     } else {
        //         $("input[name=optionsRadiosinline]").get(1).checked = true;
        //     }
        //     if (row.lwOptPersonnel.isTeacher == 1) {
        //         $("input[name=isTeacher]").get(0).checked = true;
        //     } else {
        //         $("input[name=isTeacher]").get(1).checked = true;
        //     }
        //     $('#updateLogin').modal('show');
        // },
        onLoadSuccess: function () {

        },
        onLoadError: function () {
            mif.showErrorMessageBox("数据加载失败！");
        }
    });
}

function selectuserinfo() {
    initTable();
}

function togglebox(info, name) {
    $("#" + name).popover({content: info, container: 'body', placement: 'auto left'});
    $("#" + name).popover('show');
    setTimeout(function () {
        $("#" + name).popover('destroy');
    }, 2000);
}
//
// function blurLoginName() {
//     var login_name = $("#login_name").val().trim();
//     $.ajax({
//         url: "personnel!checkLoginName.action",
//         type: "POST",
//         dataType: "json",
//         data: {
//             "loginName": login_name,
//         },
//         success: function (data) {
//             if (data == 0) {
//                 togglebox("用户名存在", "login_name");
//                 $("#login_name").val("");
//             }
//         }
//     });
// }