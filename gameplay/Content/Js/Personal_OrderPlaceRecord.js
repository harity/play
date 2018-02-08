$(function () {
    $('.order_type .type_btn.top_btn').click();
})
$('.order_type .type_btn').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var orderlist = $('<div class="order_list"></div>');
    if ($(this).hasClass('top_btn')) {
        $('.order_cont').empty();
        $('.order_cont').append('<div class="order_top_search"><span class="game_name">游戏名称</span><select class="name_select"><option value="全部">全部</option></select><span class="order_state">订单状态</span><select class="state_select"><option value="全部">全部</option><option value="待开始">待开始</option><option value="进行中">进行中</option><option value="已完成">已完成</option><option value="异常">异常</option><option value="已拒绝">已拒绝</option></select><span class="key">关键词</span><input class="key_inp" type="text" name="key" /><button class="order_top_btn">查询</button></div>');
        $('.order_cont').append('<div class="order_msg"><span>订单信息</span><span>订单价格</span><span>订单状态</span><span>操作</span></div>');
        $.ajax({
            type: 'post',
            dataType: 'json',
            url:'',
            data: {

            },
            success: function (data) {
                //state  0：取消订单   1：确认开始   2：确认结果   3：给大神评价   4：已评价
                var state = ['<a class="cancel hover">取消订单</a>', '<a class="start hover">确认开始</a>', '<a class="result hover">确认结果</a>', '<a class="evaluate hover">给大神评价</a>', '已评价'];
                if(data.length==0){
                    orderlist.append('<div class="no_order"><div class="no_bg"></div><h2>暂无接单记录</h2><p>前往<a class="hover" href="#">“抢单页面”</a>开启您的上分之旅吧</p></div>');
                } else {
                    var str = '<div class="list_item list_recreation"><div class="order_number_cont"><div class="fl"><span>订单号：</span><span class="order_number">12345689756335445</span></div><div class="fr"><span>下单人：</span><span class="order_placer">大章鱼</span><span class="chat hover">聊天</span></div></div><div class="order_item_msg"><div class="order_time_cont"><p>王者荣耀-手Q大区-最强王者-1局</p><p><span>接单时间：</span><span class="order_time">2018-09-10 16:22:22</span></p></div><div class="order_money"><span>8.0</span></div><div class="order_state"><span>待开始</span></div><div class="order_operation two"><p class="order_handle hover">开始</p><a class="order_details hover" href="#">订单详情</a></div></div></div>';
                }
                $('.order_cont').append(orderlist);
            }
        })
        orderlist.append('<div class="list_item list_recreation"><div class="order_number_cont"><div class="fl"><span>订单号：</span><span class="order_number">12345689756335445</span></div><div class="fr"><span>下单人：</span><span class="order_placer">大章鱼</span><span class="chat hover">聊天</span></div></div><div class="order_item_msg"><div class="order_time_cont"><p>王者荣耀-手Q大区-最强王者-1局</p><p><span>接单时间：</span><span class="order_time">2018-09-10 16:22:22</span></p></div><div class="order_money"><span>8.0</span></div><div class="order_state"><span>待开始</span></div><div class="order_operation two"><p class="order_handle"><a class="hover">开始</a></p><a class="order_details hover" href="#">订单详情</a></div></div></div>');
        $('.order_cont').append(orderlist);
    } else if ($(this).hasClass('recreation_btn')) {
        $('.order_cont').empty();
        $('.order_cont').append('<div class="order_recreation_search"><span class="order_mold">类型</span><select class="mold_select"><option value="全部">全部</option></select><span class="game_name">游戏名称</span><select class="name_select"><option value="全部">全部</option></select><span class="order_state">订单状态</span><select class="state_select"><option value="全部">全部</option><option value="待开始">待开始</option><option value="进行中">进行中</option><option value="已完成">已完成</option><option value="异常">异常</option><option value="已拒绝">已拒绝</option></select><span class="key">关键词</span><input class="key_inp" type="text" name="key" /><button class="order_recreation_btn">查询</button></div>');
        $('.order_cont').append('<div class="order_msg"><span>订单信息</span><span>订单价格</span><span>订单状态</span><span>操作</span></div>');
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: '',
            data: {

            },
            success: function (data) {
                if (data.length == 0) {
                    orderlist.append('<div class="no_order display"><div class="no_bg"></div><h2>暂无接单记录</h2><p>前往<a class="hover" href="#">“抢单页面”</a>开启您的上分之旅吧</p>/div>');
                } else {
                    var str = '';
                }
            }
        })
    }
})

//确认游戏结果
//绝地求生
$('.game_result_cel').click(function () {
    $('.game_result.PUBG').addClass('display');
})
$('.game_result_PUBG_ok').click(function () {
    $.ajax({
        type:'post',
        dataType: 'json',
        data: {

        },
        url: '',
        success: function () {
            $('.game_result.PUBG').addClass('display');
        }
    })
})
$('.game_result_PUBG_cancel').click(function () {
    $('.game_result.PUBG').addClass('display');
})