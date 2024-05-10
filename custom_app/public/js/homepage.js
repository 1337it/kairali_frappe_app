if ($('html').attr('data-theme') == 'dark') {
$("meta[name='theme-color']").attr('content', '#232323');
};
if ($('html').attr('data-theme') == 'light'){
$("meta[name='theme-color']").attr('content', '#ededed');
};

frappe.ui.keys.add_shortcut({
description: "Page Backward",
shortcut: "alt+left",
  action: () => {
    window.history.go(-1);
}
});
frappe.ui.keys.add_shortcut({
description: "Page Forward",
shortcut: "alt+right",
  action: () => {
    window.history.go(+1);
}
});

const backbutton = document.createElement('button');

      backbutton.id = 'backbutton';

      // Attach the "click" event to your button
      backbutton.addEventListener('click', () => {
            history.back();
      });
      document.body.appendChild(backbutton);

const drivebutton = document.createElement('button');

      drivebutton.id = 'drivebutton';
  const body = document.querySelector("#body");
const driveframe = document.createElement('div');
driveframe.innerHTML='<iframe id="driveframe" src="/drive" style="height: calc(100% - var(--navbar-height));width: calc(100% - 48px);z-index: 6!important;left:48px;top:var(--navbar-height);position: fixed;border: none;background-color: var(--bg-color);" title="Drive"></iframe>';

      // Attach the "click" event to your button
      drivebutton.addEventListener('click', () => {
        $("body").attr('data-route', 'Drive');
body.appendChild(driveframe);


      });
 document.body.appendChild(drivebutton);

const chatbutton = document.createElement('button');

      chatbutton.id = 'chatbutton';
chatbutton.class = 'raven-chat';
  const body2 = document.querySelector("#body");
const driveframe2 = document.createElement('div');
driveframe2.innerHTML='<iframe id="chatframe" src="/raven" style="height: calc(100% - var(--navbar-height));width: calc(100% - 48px);z-index: 6!important;left:48px;top:var(--navbar-height);position: fixed;border: none;" title="Drive"></iframe>';

      // Attach the "click" event to your button
      chatbutton.addEventListener('click', () => {
        $("body").attr('data-route', 'Messenger');        
body.appendChild(driveframe2);


      });
 document.body.appendChild(chatbutton);





frappe.ui.keys.add_shortcut({
    shortcut: 'ctrl+w',
    action: () => { 
            const current_doc = $('.data-row.editable-row').parent().attr("data-name");
      const curdoc = (cur_frm.doctype + " Item");
            const item_row = locals[curdoc][current_doc];
            frappe.call({
                method: 'erpnext.stock.dashboard.item_dashboard.get_data',
                args: {
                    item_code: item_row.item_code,
                },
                callback: function(r) {
                    if (r.message.length > 0){
                        const d = new frappe.ui.Dialog({
                            title: __('Warehouse Stock Balance'),
                            width: 400
                        });
                        $(`<div class="modal-body ui-front">
                            <h2>${item_row.item_code}</h2>
                            <table class="table table-bordered">
                            <thead>
                                <tr>
                                <th>Warehouse</th>
                                <th>Qty</th>
                                <th>UOM</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                            </table>
                        </div>`).appendTo(d.body);
                        r.message.forEach(element => {
                            const tbody = $(d.body).find('tbody');
                            const tr = $(`
                            <tr>
                                <td>${element.warehouse}</td>
                                <td>${element.actual_qty}</td>
                                <td>${item_row.stock_uom }</td>
                            </tr>
                            `).appendTo(tbody)
                            tbody.find('.check-warehouse').on('change', function() {
                                $('input.check-warehouse').not(this).prop('checked', false);  
                            });
                        });
                        d.set_primary_action("Close", function() {
       d.hide();
                        });
                        cur_frm.rec_dialog = d;
                        d.show();  
                         d.$wrapper.find('.modal-dialog').css("width", "90%");
                    }
                }
            });     
    },
    page: this.page,
    description: __('Get Item INFO'),
    ignore_inputs: true,
    
});





frappe.ui.keys.add_shortcut({
    shortcut: 'ctrl+l',
    action: () => { 
            const current_doc = $('.data-row.editable-row').parent().attr("data-name");
      const curdoc = (cur_frm.doctype + " Item");
            const item_row = locals[curdoc][current_doc];
            frappe.call({
                method: 'frappe.client.get_list',
              args :{
              doctype: 'Stock Ledger Entry',
			fields: ['posting_date', 'voucher_type', 'voucher_no', 'qty_after_transaction', 'incoming_rate', 'outgoing_rate'],
                filters: [
                    ["item_code", "=",  item_row.item_code],
                ]
              },
                callback: function(r) {
                    if (r.message.length > 0){
                        const d = new frappe.ui.Dialog({
                            title: __('Stock Ledger Entries'),
                            width: 400
                        });
                        $(`<div class="modal-body ui-front">
                            <h2>${item_row.item_code}</h2>
                            <table class="table table-bordered">
                            <thead>
                                <tr>
                                <th>Posting Date</th>
                                <th>Voucher Type</th>
                                <th>Voucher No.</th>
                                <th>Qty After Transaction</th>
                                <th>Incoming Rate</th>
                                <th>Outgoing Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                            </table>
                        </div>`).appendTo(d.body);
                        r.message.forEach(element => {
                            const tbody = $(d.body).find('tbody');
                            const tr = $(`
                            <tr>
                                <td>${element.posting_date}</td>
                                <td>${element.voucher_type}</td>
                                <td>${element.voucher_no}</td>
                                <td>${element.qty_after_transaction}</td>
                                <td>${element.incoming_rate}</td>
                                <td>${element.outgoing_rate}</td>
                            </tr>
                            `).appendTo(tbody)
                            tbody.find('.check-warehouse').on('change', function() {
                                $('input.check-warehouse').not(this).prop('checked', false);  
                            });
                        });
                        d.set_primary_action("Close", function() {
       d.hide();
                        });
                        cur_frm.rec_dialog = d;
                        d.show();  
                         d.$wrapper.find('.modal-dialog').css("width", "90%");
                    }
              }
            });     
    },
    page: this.page,
    description: __('Get Item INFO'),
    ignore_inputs: true,
    
});


frappe.ui.keys.add_shortcut({
    shortcut: 'ctrl+r',
    action: () => { 
            const current_doc = $('.data-row.editable-row').parent().attr("data-name");
      const curdoc = (cur_frm.doctype + " Item");
           const pricelist = cur_frm.doc.selling_price_list;
            const item_row = locals[curdoc][current_doc];
            frappe.call({
                method: 'frappe.client.get_list',
              args :{
              doctype: 'Item Price',
			fields: ["custom_block_price", "price_list_rate", "custom_wholesale_price"],
                filters: [
                    ["item_code", "=",  item_row.item_code],
                  ["price_list", "=",  pricelist]
                ]
              },
                callback: function(r) {
                    if (r.message.length > 0){
                        const d = new frappe.ui.Dialog({
                            title: __('Price Breakdown'),
                            width: 400
                        });
                        $(`<div class="modal-body ui-front">
                            <h2>${item_row.item_code}</h2>
                            <table class="table table-bordered">
                            <thead>
                                <tr>
                                <th>Block Price</th>
                                <th>Retail Price</th>
                                <th>Wholesale Price</th>
                                <th>5%</th>
                                <th>10%</th>
                                <th>15%</th>
                                <th>20%</th>
                                <th>25%</th>
                                <th>30%</th>
                                <th>35%</th>
                                <th>50%</th>
                                <th>100%</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                            </table>
                        </div>`).appendTo(d.body);
                        r.message.forEach(element => {
                            const tbody = $(d.body).find('tbody');
                            const tr = $(`
                            <tr>
                                <td>${element.custom_block_price}</td>
                                <td>${element.price_list_rate}</td>
                                <td>${element.custom_wholesale_price}</td>
                                <td>${(item_row.rate * 1.05).toFixed(2)}</td>
                                <td>${(item_row.rate * 1.1).toFixed(2)}</td>
                                <td><a onclick='click(1.15);'>${(item_row.rate * 1.15).toFixed(2)}</a></td>
                                <td>${(item_row.rate * 1.2).toFixed(2)}</td>
                                <td>${(item_row.rate * 1.25).toFixed(2)}</td>
                                <td>${(item_row.rate * 1.30).toFixed(2)}</td>
                                <td>${(item_row.rate * 1.35).toFixed(2)}</td>
                                <td>${(item_row.rate * 1.5).toFixed(2)}</td>
                                <td>${(item_row.rate * 2).toFixed(2)}</td>
                            </tr>
                            `).appendTo(tbody)
                            tbody.find('.check-warehouse').on('change', function() {
                                $('input.check-warehouse').not(this).prop('checked', false);  
                           
                            });
                          
                        });
                        d.set_primary_action("Close", function() {
       d.hide();
                        });
                        cur_frm.rec_dialog = d;
                        if (c >=1){
                        function click(c){
                        item_row.rate = (item_row.rate*c);
                        }
                        }
                        d.show();  
                         d.$wrapper.find('.modal-dialog').css("width", "90%");
                    }
              }
            });     
    },
    page: this.page,
    description: __('Get Item INFO'),
    ignore_inputs: true,
    
});


	frappe.ui.keys.add_shortcut({
			shortcut: "down",
			action: () => cur_frm.navigate_records(0),
			description: __("Go to next record"),
			ignore_inputs: true,
		});

frappe.ui.keys.add_shortcut({
			shortcut: "up",
			action: () => cur_frm.navigate_records(1),
			description: __("Go to previous record"),
			ignore_inputs: true,

		});
$(document).ready(function(){
	$('.minimize').on('click', function(){minimize();});
	$('.maximize').on('click', function(){maximize();});
});

function minimize(){
	$('body').addClass('minimized');
}

function maximize(){
	$('body').removeClass('minimized');
}




const saver = document.createElement('div');
saver.innerHTML='<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment-with-locales.min.js"></script><script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js"></script><script type="text/javascript" src="https://code.jquery.com/jquery-2.2.4.min.js"></script>';

      // Attach the "click" event to your button
        $("body").attr('data-route', 'Saver');
body.appendChild(saver);


/*! Idle Timer v1.0.1 2014-03-21 | https://github.com/thorst/jquery-idletimer | (c) 2014 Paul Irish | Licensed MIT */
!function(a){a.idleTimer=function(b,c){var d;"object"==typeof b?(d=b,b=null):"number"==typeof b&&(d={timeout:b},b=null),c=c||document,d=a.extend({idle:!1,timeout:3e4,events:"mousemove keydown wheel DOMMouseScroll mousewheel mousedown touchstart touchmove MSPointerDown MSPointerMove"},d);var e=a(c),f=e.data("idleTimerObj")||{},g=function(b){var d=a.data(c,"idleTimerObj")||{};d.idle=!d.idle,d.olddate=+new Date;var e=a.Event((d.idle?"idle":"active")+".idleTimer");a(c).trigger(e,[c,a.extend({},d),b])},h=function(b){var d=a.data(c,"idleTimerObj")||{};if(null==d.remaining){if("mousemove"===b.type){if(b.pageX===d.pageX&&b.pageY===d.pageY)return;if("undefined"==typeof b.pageX&&"undefined"==typeof b.pageY)return;var e=+new Date-d.olddate;if(200>e)return}clearTimeout(d.tId),d.idle&&g(b),d.lastActive=+new Date,d.pageX=b.pageX,d.pageY=b.pageY,d.tId=setTimeout(g,d.timeout)}},i=function(){var b=a.data(c,"idleTimerObj")||{};b.idle=b.idleBackup,b.olddate=+new Date,b.lastActive=b.olddate,b.remaining=null,clearTimeout(b.tId),b.idle||(b.tId=setTimeout(g,b.timeout))},j=function(){var b=a.data(c,"idleTimerObj")||{};null==b.remaining&&(b.remaining=b.timeout-(+new Date-b.olddate),clearTimeout(b.tId))},k=function(){var b=a.data(c,"idleTimerObj")||{};null!=b.remaining&&(b.idle||(b.tId=setTimeout(g,b.remaining)),b.remaining=null)},l=function(){var b=a.data(c,"idleTimerObj")||{};clearTimeout(b.tId),e.removeData("idleTimerObj"),e.off("._idleTimer")},m=function(){var b=a.data(c,"idleTimerObj")||{};if(b.idle)return 0;if(null!=b.remaining)return b.remaining;var d=b.timeout-(+new Date-b.lastActive);return 0>d&&(d=0),d};if(null===b&&"undefined"!=typeof f.idle)return i(),e;if(null===b);else{if(null!==b&&"undefined"==typeof f.idle)return!1;if("destroy"===b)return l(),e;if("pause"===b)return j(),e;if("resume"===b)return k(),e;if("reset"===b)return i(),e;if("getRemainingTime"===b)return m();if("getElapsedTime"===b)return+new Date-f.olddate;if("getLastActiveTime"===b)return f.lastActive;if("isIdle"===b)return f.idle}return e.on(a.trim((d.events+" ").split(" ").join("._idleTimer ")),function(a){h(a)}),f=a.extend({},{olddate:+new Date,lastActive:+new Date,idle:d.idle,idleBackup:d.idle,timeout:d.timeout,remaining:null,tId:null,pageX:null,pageY:null}),f.idle||(f.tId=setTimeout(g,f.timeout)),a.data(c,"idleTimerObj",f),e},a.fn.idleTimer=function(b){return this[0]?a.idleTimer(b,this[0]):this}}(jQuery);

(function ($) {
      
    $( document ).on( "idle.idleTimer", function(event, elem, obj){
        $(".lockscreen").fadeIn();
    });
    
    $( document ).on( "active.idleTimer", function(event, elem, obj, triggerevent){
        $(".lockscreen").fadeOut();
    });
    
    $.idleTimer(3000);
    
})(jQuery);


var describeArc, polarToCartesian, setCaptions;

polarToCartesian = function(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians;
  angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
};

describeArc = function(x, y, radius, startAngle, endAngle) {
  var arcSweep, end, start;
  start = polarToCartesian(x, y, radius, endAngle);
  end = polarToCartesian(x, y, radius, startAngle);
  arcSweep = endAngle - startAngle <= 180 ? '0' : '1';
  return ['M', start.x, start.y, 'A', radius, radius, 0, arcSweep, 0, end.x, end.y].join(' ');
};

setCaptions = function() {
  var dot, hour, hourArc, minArc, minute, now, pos;
  now = new Date();
  hour = now.getHours() % 12;
  minute = now.getMinutes();
  hourArc = (hour * 60 + minute) / (12 * 60) * 360;
  minArc = minute / 60 * 360;
  $('.clockArc.hour').attr('d', describeArc(500, 240, 150, 0, hourArc));
  $('.clockArc.minute').attr('d', describeArc(500, 240, 170, 0, minArc));
  $('.clockDot.hour').attr('d', describeArc(500, 240, 150, hourArc - 3, hourArc));
  $('.clockDot.minute').attr('d', describeArc(500, 240, 170, minArc - 1, minArc));
  dot = $(".clockDot.hour");
  pos = polarToCartesian(500, 240, 150, hourArc);
  dot.attr("cx", pos.x);
  dot.attr("cy", pos.y);
  dot = $(".clockDot.minute");
  pos = polarToCartesian(500, 240, 170, minArc);
  dot.attr("cx", pos.x);
  dot.attr("cy", pos.y);
  return $('#time').text(moment().format('H:mm'));
};

$('#day').text(moment().format('dddd'));

$('#date').text(moment().format('MMMM D'));

setCaptions();

setInterval(function() {
  return setCaptions();
}, 10 * 1000);

$(function() {
  TweenMax.staggerFrom(".clockArc", .5, {
    drawSVG: 0,
    ease: Power3.easeOut
  }, 0.3);
  TweenMax.from("#time", 1.0, {
    attr: {
      y: 350
    },
    opacity: 0,
    ease: Power3.easeOut,
    delay: 0.5
  });
  TweenMax.from(".dayText", 1.0, {
    attr: {
      y: 310
    },
    opacity: 0,
    delay: 1.0,
    ease: Power3.easeOut
  });
  return TweenMax.from(".dateText", 1.0, {
    attr: {
      y: 350
    },
    opacity: 0,
    delay: 1.5,
    ease: Power3.easeOut
  });
});
