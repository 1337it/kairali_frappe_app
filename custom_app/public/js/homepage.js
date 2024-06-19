const saver1 ='<div id="overlay"><div id="watch">  <div class="frame-face"></div>  <ul class="minute-marks">    <li></li><li></li><li></li><li></li><li></li><li></li>    <li></li><li></li><li></li><li></li><li></li><li></li>    <li></li><li></li><li></li><li></li><li></li><li></li>    <li></li><li></li><li></li><li></li><li></li><li></li>    <li></li><li></li><li></li><li></li><li></li><li></li>    <li></li><li></li><li></li><li></li><li></li><li></li>    <li></li><li></li><li></li><li></li><li></li><li></li>    <li></li><li></li><li></li><li></li><li></li><li></li>  </ul>  <div class="digital-wrap">    <ul class="digit-hours">      <li>23</li>      <li>00</li><li>01</li><li>02</li><li>03</li><li>04</li><li>05</li>      <li>06</li><li>07</li><li>08</li><li>09</li><li>10</li><li>11</li>      <li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li>      <li>18</li><li>19</li><li>20</li><li>21</li><li>22</li>    </ul>    <ul class="digit-minutes">      <li>10</li><li>11</li>      <li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li>      <li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li>      <li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li>      <li>30</li><li>31</li><li>32</li><li>33</li><li>34</li><li>35</li>      <li>36</li><li>37</li><li>38</li><li>39</li><li>40</li><li>41</li>      <li>42</li><li>43</li><li>44</li><li>45</li><li>46</li><li>47</li>      <li>48</li><li>49</li><li>50</li><li>51</li><li>52</li><li>53</li>      <li>54</li><li>55</li><li>56</li><li>57</li><li>58</li><li>59</li>      <li>00</li><li>01</li><li>02</li><li>03</li><li>04</li><li>05</li>      <li>06</li><li>07</li><li>08</li><li>09</li>    </ul>    <ul class="digit-seconds">      <li>20</li><li>21</li><li>22</li><li>23</li>      <li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li>      <li>30</li><li>31</li><li>32</li><li>33</li><li>34</li><li>35</li><li>36</li><li>37</li><li>38</li><li>39</li><li>40</li><li>41</li><li>42</li><li>43</li><li>44</li><li>45</li><li>46</li><li>47</li><li>48</li><li>49</li><li>50</li><li>51</li><li>52</li><li>53</li><li>54</li><li>55</li><li>56</li><li>57</li><li>58</li><li>59</li><li>00</li><li>01</li><li>02</li><li>03</li><li>04</li><li>05</li><li>06</li><li>07</li><li>08</li><li>09</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li></ul></div><ul class="digits"> <li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li></ul><div class="hours-hand"></div><div class="minutes-hand"></div><div class="seconds-hand"></div></div></div>';
$('body').append(saver1);
(function() {
  const interval = 10000000;
  const timeout = 5;
  let idleCounter = 0;
  window.onload = document.onmousemove = document.onkeypress = function() {
    idleCounter = 0;
    document.documentElement.classList.remove('idle');
  };
frappe.ui.keys.add_shortcut({
description: "Page Forward",
shortcut: "escape",
  action: () => {
  document.documentElement.classList.add('idle');
}
});

  window.setInterval(function() {
    if (++idleCounter >= timeout) {
      document.documentElement.classList.add('idle');
      idleCounter = 0;
    }
  }, interval);
})();




var clockhead = '<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>'
$('head').append(clockhead);
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


const backbutton = document.createElement('th');

      backbutton.innerHTML = "<button class='fa fa-arrow-left' id='backbutton'>";

      // Attach the "click" event to your button
     



const drivebutton = document.createElement('li');

    drivebutton.innerHTML = "<button class='fa fa-folder nav-item' id='drivebutton'>";
  const body = document.querySelector("#body");
const driveframe = document.createElement('div');
driveframe.innerHTML='<iframe id="driveframe" src="/drive" style="height: 90%;width: 90%;z-index: 999!important;right: 5%;top: calc(2.5% + var(--navbar-height));background: rgba(255, 255, 255, 0.62);-webkit-backdrop-filter: blur(10px);backdrop-filter: blur(10px);position: fixed;border: none;bottom: calc(5% - var(--navbar-height));box-shadow: 0 7px 29px 0 rgba(100, 100, 111, 0.47), -2px 1px 100px 100px rgba(100, 100, 111, 0.27);;" title="Drive"></iframe><div id="driveoverlay"></div>';

      // Attach the "click" event to your button
     




const chatbutton = document.createElement('li');

chatbutton.innerHTML = "<button class='fa fa-comment nav-item' id='chatbutton'>";
  const body2 = document.querySelector("#body");
const driveframe2 = document.createElement('div');
driveframe2.innerHTML='<iframe id="chatframe" src="/raven" style="height: 90%;width: 90%;z-index: 999!important;right: 5%;top: calc(2.5% + var(--navbar-height));position: fixed;border: none;bottom: calc(5% - var(--navbar-height));box-shadow: 0 7px 29px 0 rgba(100, 100, 111, 0.47), -2px 1px 100px 100px rgba(100, 100, 111, 0.27);" title="Drive"></iframe><div id="chatoverlay"></div>';

      // Attach the "click" event to your button
      chatbutton.addEventListener('click', () => {

$("body").attr('overlay-route', 'Messenger');
body2.appendChild(driveframe2);
const chatclose = document.createElement('li');

      chatclose.innerHTML = '<button class="fa fa-close" id="chatclose">';
body2.appendChild(chatclose);
      // Attach the "click" event to your button
      chatclose.addEventListener('click', () => {
            body2.removeChild(driveframe2);
	      body2.removeChild(chatclose);
$("body").attr('overlay-route', '');

      });
      });




const formclose = document.createElement('th');

      formclose.innerHTML = '<button class="fa fa-close" id="formclose">';

      // Attach the "click" event to your button
      
      // Attach the "click" event to your button







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



 window.onload = function() {
var selection = document.querySelector('[data-page-route^="List/"] .page-form') !== null;
if (selection) {
const filter = document.querySelector('[data-page-route^="List/"] .page-form');
const targetsidebar = document.querySelector('[data-page-route^="List/"] .layout-side-section');
targetsidebar.prepend(filter);
}
else
{
}

var selection2 = document.querySelector('.form-section.card-section[data-fieldname="customer_section"]') !== null;
if (selection2) {
const customer = document.querySelector('.form-section.card-section[data-fieldname="customer_section"]');
	
const sinvsidebar = document.querySelector('.submitted-form .layout-side-section');
sinvsidebar.prepend(customer);
}
else
{
}	 
 }

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
			shortcut: "shift+down",
			action: () => cur_frm.navigate_records(0),
			description: __("Go to next record"),
			ignore_inputs: true,
		});

frappe.ui.keys.add_shortcut({
			shortcut: "shift+up",
			action: () => cur_frm.navigate_records(1),
			description: __("Go to previous record"),
			ignore_inputs: true,

		});





window.onload = function() {
	var selection3 = document.querySelector('#page-Workspaces') !== null;
if (selection3) {
}
else
{
var el = document.querySelector('#body');
	el.innerHTML = '<div class="content page-container" id="page-Workspaces" data-page-route="Workspaces" style=""><div class="page-head flex"> <div class="container"> <div class="row flex align-center page-head-content justify-between"> <div class="col-md-4 col-sm-6 col-xs-7 page-title"> <!-- <div class="title-image hide hidden-md hidden-lg"></div> --> <!-- title --> <button class="btn-reset sidebar-toggle-btn" title="" aria-label="Toggle Sidebar" data-original-title="Toggle Sidebar"> <svg class="es-icon icon-md sidebar-toggle-placeholder"> <use href="#es-line-align-justify"></use> </svg> <span class="sidebar-toggle-icon"> <svg class="es-icon icon-md"> <use href="#es-line-sidebar-collapse"> </use> </svg> </span> </button> <div class="flex fill-width title-area"> <div> <div class="flex"> <h3 class="ellipsis title-text" title="Home">Home</h3> <span class="indicator-pill whitespace-nowrap"></span> </div> <div class="ellipsis sub-heading hide text-muted"></div> </div> <button class="btn btn-default more-button hide"> <svg class="icon icon-sm"> <use href="#icon-dot-horizontal"> </use> </svg> </button> </div> </div> <div class="flex col page-actions justify-content-end"> <!-- buttons --> <div class="custom-actions hidden-xs hidden-md"><button data-label="Create%20Workspace" class="btn btn-default ellipsis"> Create Workspace </button></div> <div class="standard-actions flex"> <span class="page-icon-group hide hidden-xs hidden-sm"></span> <div class="menu-btn-group hidden-xl"> <button type="button" class="btn btn-default icon-btn" data-toggle="dropdown" aria-expanded="false" aria-label="Menu" title="" data-original-title="Menu"> <span> <span class="menu-btn-group-label" data-label=""> <svg class="icon icon-sm"> <use href="#icon-dot-horizontal"> </use> </svg> </span> </span> </button> <ul class="dropdown-menu dropdown-menu-right" role="menu"><li class="user-action hidden-xl"> <a class="grey-link dropdown-item" href="#" onclick="return false;"> <span class="menu-item-label" data-label="Create%20Workspace"><span><span class="alt-underline">C</span>reate Workspace</span></span> </a> </li><li class="dropdown-divider user-action"></li></ul> </div> <button class="btn btn-secondary btn-default btn-sm" data-label="Edit"><svg class="es-icon es-line icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-edit"></use> </svg> <span class="hidden-xs" data-label="Edit"> <span><span class="alt-underline">E</span>dit</span> </span></button> <div class="actions-btn-group hide"> <button type="button" class="btn btn-primary btn-sm" data-toggle="dropdown" aria-expanded="false"> <span> <span class="hidden-xs actions-btn-group-label" data-label="Actions"><span><span class="alt-underline">A</span>ctions</span></span> <svg class="icon icon-xs"> <use href="#icon-select"> </use> </svg> </span> </button> <ul class="dropdown-menu dropdown-menu-right" role="menu"> </ul> </div> <button class="btn btn-primary btn-sm hide primary-action"></button> </div> </div> </div> </div> </div> <div class="container page-body"> <div class="page-toolbar hide"> <div class="container"> </div> </div> <div class="page-wrapper"> <div class="page-content"> <div class="workflow-button-area btn-group pull-right hide"></div> <div class="clearfix"></div> <div class="row layout-main"> <div class="col-lg-2 layout-side-section"><button class="sr-only sr-only-focusable btn btn-primary-light my-2" tabindex="0" role="link">Navigate to main content</button><div class="list-sidebar overlay-sidebar hidden-xs hidden-sm"> <div class="desk-sidebar list-unstyled sidebar-menu"><div class="standard-sidebar-section nested-container hidden" data-title="My Workspaces"><button class="btn-reset standard-sidebar-label" aria-label="Toggle Section: My Workspaces" aria-expanded="true"> <span><svg class="es-icon es-line icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></span> <span class="section-title">My Workspaces<span> </span></span></button></div><div class="standard-sidebar-section nested-container" data-title="Public"><button class="btn-reset standard-sidebar-label" aria-label="Toggle Section: Public" aria-expanded="true"> <span><svg class="es-icon es-line icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></span> <span class="section-title">Public<span> </span></span></button><div class="sidebar-item-container is-draggable" item-parent="" item-name="Home" item-public="1" item-is-hidden="0"> <div class="desk-sidebar-item standard-sidebar-item selected"> <a href="/app/home" class="item-anchor" title="Home"> <span class="sidebar-item-icon" item-icon="getting-started"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-getting-started"></use> </svg> </span> <span class="sidebar-item-label">Home<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs drag-handle" title="Drag"><svg class="es-icon es-line icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-drag"></use> </svg></button><div class="btn btn-xs setting-btn dropdown-btn" title="Setting"> <svg class="es-icon es-line icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-dot-horizontal"></use> </svg> </div> <div class="dropdown-list hidden"><div class="dropdown-item" title="Edit Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-edit"></use> </svg></span> <span class="dropdown-item-label">Edit</span> </div><div class="dropdown-item" title="Duplicate Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-duplicate"></use> </svg></span> <span class="dropdown-item-label">Duplicate</span> </div><div class="dropdown-item" title="Hide Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-hide"></use> </svg></span> <span class="dropdown-item-label">Hide</span> </div></div><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="" item-name="Helpdesk" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/helpdesk" class="item-anchor" title="Helpdesk"> <span class="sidebar-item-icon" item-icon="support"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-support"></use> </svg> </span> <span class="sidebar-item-label">Helpdesk<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="" item-name="Accounting" item-public="1" item-is-hidden="0"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/accounting" class="item-anchor" title="Accounting"> <span class="sidebar-item-icon" item-icon="accounting"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-accounting"></use> </svg> </span> <span class="sidebar-item-label">Accounting<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs drag-handle" title="Drag"><svg class="es-icon es-line icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-drag"></use> </svg></button><div class="btn btn-xs setting-btn dropdown-btn" title="Setting"> <svg class="es-icon es-line icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-dot-horizontal"></use> </svg> </div> <div class="dropdown-list hidden"><div class="dropdown-item" title="Edit Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-edit"></use> </svg></span> <span class="dropdown-item-label">Edit</span> </div><div class="dropdown-item" title="Duplicate Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-duplicate"></use> </svg></span> <span class="dropdown-item-label">Duplicate</span> </div><div class="dropdown-item" title="Hide Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-hide"></use> </svg></span> <span class="dropdown-item-label">Hide</span> </div></div><button class="btn-reset drop-icon hidden show-in-edit-mode"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container hidden"><div class="sidebar-item-container is-draggable" item-parent="Accounting" item-name="Payables" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/payables" class="item-anchor" title="Payables"> <span class="sidebar-item-icon" item-icon="arrow-left"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-arrow-left"></use> </svg> </span> <span class="sidebar-item-label">Payables<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="Accounting" item-name="Receivables" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/receivables" class="item-anchor" title="Receivables"> <span class="sidebar-item-icon" item-icon="arrow-right"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-arrow-right"></use> </svg> </span> <span class="sidebar-item-label">Receivables<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="Accounting" item-name="Financial Reports" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/financial-reports" class="item-anchor" title="Financial Reports"> <span class="sidebar-item-icon" item-icon="file"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-file"></use> </svg> </span> <span class="sidebar-item-label">Financial Reports<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div></div></div><div class="sidebar-item-container is-draggable" item-parent="" item-name="Buying" item-public="1" item-is-hidden="0"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/buying" class="item-anchor" title="Buying"> <span class="sidebar-item-icon" item-icon="buying"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-buying"></use> </svg> </span> <span class="sidebar-item-label">Buying<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs drag-handle" title="Drag"><svg class="es-icon es-line icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-drag"></use> </svg></button><div class="btn btn-xs setting-btn dropdown-btn" title="Setting"> <svg class="es-icon es-line icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-dot-horizontal"></use> </svg> </div> <div class="dropdown-list hidden"><div class="dropdown-item" title="Edit Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-edit"></use> </svg></span> <span class="dropdown-item-label">Edit</span> </div><div class="dropdown-item" title="Duplicate Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-duplicate"></use> </svg></span> <span class="dropdown-item-label">Duplicate</span> </div><div class="dropdown-item" title="Hide Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-hide"></use> </svg></span> <span class="dropdown-item-label">Hide</span> </div></div><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="" item-name="Selling" item-public="1" item-is-hidden="0"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/selling" class="item-anchor" title="Selling"> <span class="sidebar-item-icon" item-icon="sell"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-sell"></use> </svg> </span> <span class="sidebar-item-label">Selling<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs drag-handle" title="Drag"><svg class="es-icon es-line icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-drag"></use> </svg></button><div class="btn btn-xs setting-btn dropdown-btn" title="Setting"> <svg class="es-icon es-line icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-dot-horizontal"></use> </svg> </div> <div class="dropdown-list hidden"><div class="dropdown-item" title="Edit Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-edit"></use> </svg></span> <span class="dropdown-item-label">Edit</span> </div><div class="dropdown-item" title="Duplicate Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-duplicate"></use> </svg></span> <span class="dropdown-item-label">Duplicate</span> </div><div class="dropdown-item" title="Hide Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-hide"></use> </svg></span> <span class="dropdown-item-label">Hide</span> </div></div><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="" item-name="Stock" item-public="1" item-is-hidden="0"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/stock" class="item-anchor" title="Stock"> <span class="sidebar-item-icon" item-icon="stock"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-stock"></use> </svg> </span> <span class="sidebar-item-label">Stock<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs drag-handle" title="Drag"><svg class="es-icon es-line icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-drag"></use> </svg></button><div class="btn btn-xs setting-btn dropdown-btn" title="Setting"> <svg class="es-icon es-line icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-dot-horizontal"></use> </svg> </div> <div class="dropdown-list hidden"><div class="dropdown-item" title="Edit Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-edit"></use> </svg></span> <span class="dropdown-item-label">Edit</span> </div><div class="dropdown-item" title="Duplicate Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-duplicate"></use> </svg></span> <span class="dropdown-item-label">Duplicate</span> </div><div class="dropdown-item" title="Hide Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-hide"></use> </svg></span> <span class="dropdown-item-label">Hide</span> </div></div><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="" item-name="Assets" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/assets" class="item-anchor" title="Assets"> <span class="sidebar-item-icon" item-icon="assets"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-assets"></use> </svg> </span> <span class="sidebar-item-label">Assets<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="" item-name="HR" item-public="1" item-is-hidden="0"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/hr" class="item-anchor" title="HR"> <span class="sidebar-item-icon" item-icon="hr"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-hr"></use> </svg> </span> <span class="sidebar-item-label">HR<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs drag-handle" title="Drag"><svg class="es-icon es-line icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-drag"></use> </svg></button><div class="btn btn-xs setting-btn dropdown-btn" title="Setting"> <svg class="es-icon es-line icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-dot-horizontal"></use> </svg> </div> <div class="dropdown-list hidden"><div class="dropdown-item" title="Edit Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-edit"></use> </svg></span> <span class="dropdown-item-label">Edit</span> </div><div class="dropdown-item" title="Duplicate Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-duplicate"></use> </svg></span> <span class="dropdown-item-label">Duplicate</span> </div><div class="dropdown-item" title="Hide Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-hide"></use> </svg></span> <span class="dropdown-item-label">Hide</span> </div></div><button class="btn-reset drop-icon hidden show-in-edit-mode"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container hidden"><div class="sidebar-item-container is-draggable" item-parent="HR" item-name="Recruitment" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/recruitment" class="item-anchor" title="Recruitment"> <span class="sidebar-item-icon" item-icon="users"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-users"></use> </svg> </span> <span class="sidebar-item-label">Recruitment<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="HR" item-name="Employee Lifecycle" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/employee-lifecycle" class="item-anchor" title="Employee Lifecycle"> <span class="sidebar-item-icon" item-icon="assign"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-assign"></use> </svg> </span> <span class="sidebar-item-label">Employee Lifecycle<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="HR" item-name="Performance" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/performance" class="item-anchor" title="Performance"> <span class="sidebar-item-icon" item-icon="star"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-star"></use> </svg> </span> <span class="sidebar-item-label">Performance<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="HR" item-name="Shift &amp; Attendance" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/shift-&amp;-attendance" class="item-anchor" title="Shift &amp; Attendance"> <span class="sidebar-item-icon" item-icon="milestone"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-milestone"></use> </svg> </span> <span class="sidebar-item-label">Shift &amp; Attendance<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="HR" item-name="Expense Claims" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/expense-claims" class="item-anchor" title="Expense Claims"> <span class="sidebar-item-icon" item-icon="expenses"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-expenses"></use> </svg> </span> <span class="sidebar-item-label">Expense Claims<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="HR" item-name="Leaves" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/leaves" class="item-anchor" title="Leaves"> <span class="sidebar-item-icon" item-icon="non-profit"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-non-profit"></use> </svg> </span> <span class="sidebar-item-label">Leaves<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div></div></div><div class="sidebar-item-container is-draggable" item-parent="" item-name="Manufacturing" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/manufacturing" class="item-anchor" title="Manufacturing"> <span class="sidebar-item-icon" item-icon="organization"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-organization"></use> </svg> </span> <span class="sidebar-item-label">Manufacturing<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="" item-name="Quality" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/quality" class="item-anchor" title="Quality"> <span class="sidebar-item-icon" item-icon="quality"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-quality"></use> </svg> </span> <span class="sidebar-item-label">Quality<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="" item-name="Projects" item-public="1" item-is-hidden="0"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/projects" class="item-anchor" title="Projects"> <span class="sidebar-item-icon" item-icon="project"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-project"></use> </svg> </span> <span class="sidebar-item-label">Projects<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs drag-handle" title="Drag"><svg class="es-icon es-line icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-drag"></use> </svg></button><div class="btn btn-xs setting-btn dropdown-btn" title="Setting"> <svg class="es-icon es-line icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-dot-horizontal"></use> </svg> </div> <div class="dropdown-list hidden"><div class="dropdown-item" title="Edit Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-edit"></use> </svg></span> <span class="dropdown-item-label">Edit</span> </div><div class="dropdown-item" title="Duplicate Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-duplicate"></use> </svg></span> <span class="dropdown-item-label">Duplicate</span> </div><div class="dropdown-item" title="Hide Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-hide"></use> </svg></span> <span class="dropdown-item-label">Hide</span> </div></div><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="" item-name="Support" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/support" class="item-anchor" title="Support"> <span class="sidebar-item-icon" item-icon="support"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-support"></use> </svg> </span> <span class="sidebar-item-label">Support<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="" item-name="Users" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/users" class="item-anchor" title="Users"> <span class="sidebar-item-icon" item-icon="users"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-users"></use> </svg> </span> <span class="sidebar-item-label">Users<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="" item-name="Website" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/website" class="item-anchor" title="Website"> <span class="sidebar-item-icon" item-icon="website"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-website"></use> </svg> </span> <span class="sidebar-item-label">Website<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="" item-name="Payroll" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/payroll" class="item-anchor" title="Payroll"> <span class="sidebar-item-icon" item-icon="money-coins-1"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-money-coins-1"></use> </svg> </span> <span class="sidebar-item-label">Payroll<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden show-in-edit-mode"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container hidden"><div class="sidebar-item-container is-draggable" item-parent="Payroll" item-name="Salary Payout" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/salary-payout" class="item-anchor" title="Salary Payout"> <span class="sidebar-item-icon" item-icon="income"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-income"></use> </svg> </span> <span class="sidebar-item-label">Salary Payout<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="Payroll" item-name="Tax &amp; Benefits" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/tax-&amp;-benefits" class="item-anchor" title="Tax &amp; Benefits"> <span class="sidebar-item-icon" item-icon="crm"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-crm"></use> </svg> </span> <span class="sidebar-item-label">Tax &amp; Benefits<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div></div></div><div class="sidebar-item-container is-draggable" item-parent="" item-name="CRM" item-public="1" item-is-hidden="0"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/crm" class="item-anchor" title="CRM"> <span class="sidebar-item-icon" item-icon="crm"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-crm"></use> </svg> </span> <span class="sidebar-item-label">CRM<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs drag-handle" title="Drag"><svg class="es-icon es-line icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-drag"></use> </svg></button><div class="btn btn-xs setting-btn dropdown-btn" title="Setting"> <svg class="es-icon es-line icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-dot-horizontal"></use> </svg> </div> <div class="dropdown-list hidden"><div class="dropdown-item" title="Edit Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-edit"></use> </svg></span> <span class="dropdown-item-label">Edit</span> </div><div class="dropdown-item" title="Duplicate Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-duplicate"></use> </svg></span> <span class="dropdown-item-label">Duplicate</span> </div><div class="dropdown-item" title="Hide Workspace"> <span class="dropdown-item-icon"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-hide"></use> </svg></span> <span class="dropdown-item-label">Hide</span> </div></div><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="" item-name="Tools" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/tools" class="item-anchor" title="Tools"> <span class="sidebar-item-icon" item-icon="tool"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-tool"></use> </svg> </span> <span class="sidebar-item-label">Tools<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="" item-name="ERPNext Settings" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/erpnext-settings" class="item-anchor" title="ERPNext Settings"> <span class="sidebar-item-icon" item-icon="setting"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-setting"></use> </svg> </span> <span class="sidebar-item-label">ERPNext Settings<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="" item-name="Integrations" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/integrations" class="item-anchor" title="Integrations"> <span class="sidebar-item-icon" item-icon="integration"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-integration"></use> </svg> </span> <span class="sidebar-item-label">Integrations<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="" item-name="ERPNext Integrations" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/erpnext-integrations" class="item-anchor" title="ERPNext Integrations"> <span class="sidebar-item-icon" item-icon="integration"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-integration"></use> </svg> </span> <span class="sidebar-item-label">ERPNext Integrations<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="" item-name="Build" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/build" class="item-anchor" title="Build"> <span class="sidebar-item-icon" item-icon="tool"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-tool"></use> </svg> </span> <span class="sidebar-item-label">Build<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div><div class="sidebar-item-container is-draggable" item-parent="" item-name="Raven" item-public="1" item-is-hidden="1"> <div class="desk-sidebar-item standard-sidebar-item "> <a href="/app/raven" class="item-anchor" title="Raven"> <span class="sidebar-item-icon" item-icon="message-1"> <svg class="icon icon-md" style="" aria-hidden="true"> <use class="" href="#icon-message-1"></use> </svg> </span> <span class="sidebar-item-label">Raven<span> </span></span></a> <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs unhide-workspace-btn" title="Unhide Workspace"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-preview"></use> </svg></button><button class="btn-reset drop-icon hidden"><svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-down"></use> </svg></button></div> </div> <div class="sidebar-child-item nested-container"></div> </div></div></div> </div></div> <div class="col layout-main-section-wrapper"> <div class="layout-main-section"> <div class="page-form row hide"></div><div id="editorjs" class="desk-page page-main-content"><div class="codex-editor"><div class="codex-editor__redactor" style="padding-bottom: 300px;"><div class="ce-block col-xs-12"><div class="ce-block__content"><div custom_block_name="greetings"><div class="widget custom-block-widget-box full-width" data-widget-name="1d18da689a"> <div class="widget-head"> <div class="widget-label"> <div class="widget-title"></div> <div class="widget-subtitle"></div> </div> <div class="widget-control"></div> </div> <div class="widget-body"><custom-block-xdmyr></custom-block-xdmyr></div> <div class="widget-footer"></div> </div></div></div></div><div class="ce-block col-xs-12"><div class="ce-block__content"><div class="widget spacer"></div></div></div><div class="ce-block col-xs-12"><div class="ce-block__content"><div class="ce-header" data-placeholder=""><span class="h4"><b>Quick Access</b></span></div></div></div><div class="ce-block col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="ce-block__content"><div shortcut_name="Item"><div class="widget shortcut-widget-box" data-widget-name="676346824c" role="link" tabindex="0" aria-label="Item"> <div class="widget-head"> <div class="widget-label"> <div class="widget-title"><span class="ellipsis" title="Item">Item</span></div> <div class="widget-subtitle"></div> </div> <div class="widget-control"><svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg></div> </div> <div class="widget-body"></div> <div class="widget-footer"></div> </div></div></div></div><div class="ce-block col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="ce-block__content"><div shortcut_name="Customer"><div class="widget shortcut-widget-box" data-widget-name="5954d5e256" role="link" tabindex="0" aria-label="Customer"> <div class="widget-head"> <div class="widget-label"> <div class="widget-title"><span class="ellipsis" title="Customer">Customer</span></div> <div class="widget-subtitle"></div> </div> <div class="widget-control"><svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg></div> </div> <div class="widget-body"></div> <div class="widget-footer"></div> </div></div></div></div><div class="ce-block col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="ce-block__content"><div shortcut_name="Supplier"><div class="widget shortcut-widget-box" data-widget-name="40f91e3e12" role="link" tabindex="0" aria-label="Supplier"> <div class="widget-head"> <div class="widget-label"> <div class="widget-title"><span class="ellipsis" title="Supplier">Supplier</span></div> <div class="widget-subtitle"></div> </div> <div class="widget-control"><svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg></div> </div> <div class="widget-body"></div> <div class="widget-footer"></div> </div></div></div></div><div class="ce-block col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="ce-block__content"><div shortcut_name="Sales Invoice"><div class="widget shortcut-widget-box" data-widget-name="7bb55fdc44" role="link" tabindex="0" aria-label="Sales Invoice"> <div class="widget-head"> <div class="widget-label"> <div class="widget-title"><span class="ellipsis" title="Sales Invoice">Sales Invoice</span></div> <div class="widget-subtitle"></div> </div> <div class="widget-control"><svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg></div> </div> <div class="widget-body"></div> <div class="widget-footer"></div> </div></div></div></div><div class="ce-block col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="ce-block__content"><div shortcut_name="Leaderboard"><div class="widget shortcut-widget-box" data-widget-name="1a887e943e" role="link" tabindex="0" aria-label="Leaderboard"> <div class="widget-head"> <div class="widget-label"> <div class="widget-title"><span class="ellipsis" title="Leaderboard">Leaderboard</span></div> <div class="widget-subtitle"></div> </div> <div class="widget-control"><svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg></div> </div> <div class="widget-body"></div> <div class="widget-footer"></div> </div></div></div></div><div class="ce-block col-xs-12"><div class="ce-block__content"><div class="widget spacer"></div></div></div><div class="ce-block col-xs-12"><div class="ce-block__content"><div class="ce-header" data-placeholder=""><span class="h4"><b>Trends</b></span></div></div></div><div class="ce-block col-xs-12 col-sm-6"><div class="ce-block__content"><div quick_list_name="Task"><div class="widget quick-list-widget-box" data-widget-name="15b5ed5a6c"> <div class="widget-head"> <div class="widget-label"> <div class="widget-title"><span class="ellipsis" title="Task">Task</span></div> <div class="widget-subtitle"></div> </div> <div class="widget-control"><div class="add-new btn btn-xs pull-right" title="Add New Task "> <svg class="icon icon-sm" style="" aria-hidden="true"> <use class="" href="#icon-add"></use> </svg> </div><div class="refresh-list btn btn-xs pull-right" title="Refresh List"> <svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-reload"></use> </svg> </div><div class="filter-list btn btn-xs pull-right" title="Add/Update Filter"> <svg class="icon icon-sm" style="" aria-hidden="true"> <use class="" href="#icon-filter"></use> </svg> </div></div> </div> <div class="widget-body"><div class="quick-list-item"> <div class="ellipsis left"> <div class="ellipsis title" title="ERP Software Users"> ERP Software Users </div> <div class="timestamp text-muted"> 1 month ago </div> </div> <div class="status indicator-pill red ellipsis"> Overdue </div><div class="right-arrow"><svg class="icon icon-xs" style="" aria-hidden="true"> <use class="" href="#icon-right"></use> </svg></div></div></div> <div class="widget-footer"><div class="see-all btn btn-xs">View List</div></div> </div></div></div></div><div class="ce-block col-xs-12 col-sm-6"><div class="ce-block__content"><div quick_list_name="Project"><div class="widget quick-list-widget-box" data-widget-name="5c3702de40"> <div class="widget-head"> <div class="widget-label"> <div class="widget-title"><span class="ellipsis" title="Project">Project</span></div> <div class="widget-subtitle"></div> </div> <div class="widget-control"><div class="add-new btn btn-xs pull-right" title="Add New Project "> <svg class="icon icon-sm" style="" aria-hidden="true"> <use class="" href="#icon-add"></use> </svg> </div><div class="refresh-list btn btn-xs pull-right" title="Refresh List"> <svg class="es-icon es-line icon-sm" style="" aria-hidden="true"> <use class="" href="#es-line-reload"></use> </svg> </div><div class="filter-list btn btn-xs pull-right" title="Add/Update Filter"> <svg class="icon icon-sm" style="" aria-hidden="true"> <use class="" href="#icon-filter"></use> </svg> </div></div> </div> <div class="widget-body"><div class="list-no-data-state text-muted">No Data...</div></div> <div class="widget-footer"><div class="see-all btn btn-xs">View List</div></div> </div></div></div></div><div class="ce-block col-xs-12"><div class="ce-block__content"><div class="widget spacer"></div></div></div><div class="ce-block col-xs-12"><div class="ce-block__content"><div class="ce-header" data-placeholder=""><span class="h4"><b>Reports &amp; Masters</b></span></div></div></div><div class="ce-block col-xs-12 col-sm-6 col-md-4"><div class="ce-block__content"><div card_name="Data Import and Settings"><div class="widget links-widget-box" data-widget-name="b4a4655683"> <div class="widget-head"> <div class="widget-label"> <div class="widget-title"><span class="ellipsis" title="Data Import and Settings">Data Import and Settings</span></div> <div class="widget-subtitle"></div> </div> <div class="widget-control"></div> </div> <div class="widget-body"><a href="/app/data-import" class="link-item ellipsis onboard-spotlight " type="Link" title="Import Data"> <span class="link-content ellipsis"> <span class="link-text">Import Data</span> <svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg> </span> </a><a href="/app/opening-invoice-creation-tool" class="link-item ellipsis onboard-spotlight " type="Link" title="Opening Invoice Creation Tool"> <span class="link-content ellipsis"> <span class="link-text">Opening Invoice Creation Tool</span> <svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg> </span> </a><a href="/app/chart-of-accounts-importer" class="link-item ellipsis onboard-spotlight " type="Link" title="Chart of Accounts Importer"> <span class="link-content ellipsis"> <span class="link-text" data-original-title="" title="">Chart of Accounts Importer</span> <svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg> </span> </a><a href="/app/letter-head" class="link-item ellipsis onboard-spotlight " type="Link" title="Letter Head"> <span class="link-content ellipsis"> <span class="link-text">Letter Head</span> <svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg> </span> </a><a href="/app/email-account" class="link-item ellipsis onboard-spotlight " type="Link" title="Email Account"> <span class="link-content ellipsis"> <span class="link-text">Email Account</span> <svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg> </span> </a></div> <div class="widget-footer"></div> </div></div></div></div><div class="ce-block col-xs-12 col-sm-6 col-md-4"><div class="ce-block__content"><div card_name="Accounting"><div class="widget links-widget-box" data-widget-name="df232f1df4"> <div class="widget-head"> <div class="widget-label"> <div class="widget-title"><span class="ellipsis" title="Accounting">Accounting</span></div> <div class="widget-subtitle"></div> </div> <div class="widget-control"></div> </div> <div class="widget-body"><a href="/app/account" class="link-item ellipsis onboard-spotlight " type="Link" title="Chart of Accounts"> <span class="link-content ellipsis"> <span class="link-text" data-original-title="" title="">Chart of Accounts</span> <svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg> </span> </a><a href="/app/company" class="link-item ellipsis onboard-spotlight " type="Link" title="Company"> <span class="link-content ellipsis"> <span class="link-text" data-original-title="" title="">Company</span> <svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg> </span> </a><a href="/app/customer" class="link-item ellipsis onboard-spotlight " type="Link" title="Customer"> <span class="link-content ellipsis"> <span class="link-text" data-original-title="" title="">Customer</span> <svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg> </span> </a><a href="/app/supplier" class="link-item ellipsis onboard-spotlight " type="Link" title="Supplier"> <span class="link-content ellipsis"> <span class="link-text" data-original-title="" title="">Supplier</span> <svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg> </span> </a></div> <div class="widget-footer"></div> </div></div></div></div><div class="ce-block col-xs-12 col-sm-6 col-md-4"><div class="ce-block__content"><div card_name="Stock"><div class="widget links-widget-box" data-widget-name="62f1223958"> <div class="widget-head"> <div class="widget-label"> <div class="widget-title"><span class="ellipsis" title="Stock">Stock</span></div> <div class="widget-subtitle"></div> </div> <div class="widget-control"></div> </div> <div class="widget-body"><a href="/app/item" class="link-item ellipsis onboard-spotlight " type="Link" title="Item"> <span class="link-content ellipsis"> <span class="link-text" data-original-title="" title="">Item</span> <svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg> </span> </a><a href="/app/item-group" class="link-item ellipsis " type="Link" title="Item Group"> <span class="link-content ellipsis"> <span class="link-text" data-original-title="" title="">Item Group</span> <svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg> </span> </a><a href="/app/warehouse" class="link-item ellipsis onboard-spotlight " type="Link" title="Warehouse"> <span class="link-content ellipsis"> <span class="link-text" data-original-title="" title="">Warehouse</span> <svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg> </span> </a><a href="/app/brand" class="link-item ellipsis onboard-spotlight " type="Link" title="Brand"> <span class="link-content ellipsis"> <span class="link-text">Brand</span> <svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg> </span> </a><a href="/app/uom" class="link-item ellipsis onboard-spotlight " type="Link" title="Unit of Measure (UOM)"> <span class="link-content ellipsis"> <span class="link-text">Unit of Measure (UOM)</span> <svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg> </span> </a><a href="/app/stock-reconciliation" class="link-item ellipsis onboard-spotlight " type="Link" title="Stock Reconciliation"> <span class="link-content ellipsis"> <span class="link-text" data-original-title="" title="">Stock Reconciliation</span> <svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg> </span> </a></div> <div class="widget-footer"></div> </div></div></div></div><div class="ce-block col-xs-12 col-sm-6 col-md-4"><div class="ce-block__content"><div card_name="CRM"><div class="widget links-widget-box" data-widget-name="4e6da6dd3f"> <div class="widget-head"> <div class="widget-label"> <div class="widget-title"><span class="ellipsis" title="CRM">CRM</span></div> <div class="widget-subtitle"></div> </div> <div class="widget-control"></div> </div> <div class="widget-body"><a href="/app/lead" class="link-item ellipsis onboard-spotlight " type="Link" title="Lead"> <span class="link-content ellipsis"> <span class="link-text">Lead</span> <svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg> </span> </a><a href="/app/customer-group" class="link-item ellipsis onboard-spotlight " type="Link" title="Customer Group"> <span class="link-content ellipsis"> <span class="link-text">Customer Group</span> <svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg> </span> </a><a href="/app/territory" class="link-item ellipsis onboard-spotlight " type="Link" title="Territory"> <span class="link-content ellipsis"> <span class="link-text" data-original-title="" title="">Territory</span> <svg class="es-icon es-line ml-2 icon-xs" style="" aria-hidden="true"> <use class="" href="#es-line-arrow-up-right"></use> </svg> </span> </a></div> <div class="widget-footer"></div> </div></div></div></div></div><div class="codex-editor-overlay"><div class="codex-editor-overlay__container"><div class="codex-editor-overlay__rectangle" style="display: none;"></div></div></div></div></div></div> <div class="layout-footer hide"></div> </div> </div></div> </div> </div></div>' + el.innerHTML;
}	 
	var el = document.querySelector('#body');
	formclose.addEventListener('click', () => {
frappe.set_route("List", frappe.get_route()[1],"List");

      });
	 backbutton.addEventListener('click', () => {
            history.back();
      });
	 drivebutton.addEventListener('click', () => {
$("body").attr('overlay-route', 'Drive');

body.appendChild(driveframe);
const driveclose = document.createElement('li');

    driveclose.innerHTML = "<button class='fa fa-close' id='driveclose' >";
body2.appendChild(driveclose);
      // Attach the "click" event to your button
      driveclose.addEventListener('click', () => {
            body.removeChild(driveframe);
$("body").attr('overlay-route', '');
	      body.removeChild(driveclose);
      });
      });
	      backbutton.addEventListener('click', () => {
            history.back();
      });

console.log(frappe.get_route());

document.querySelectorAll('#body')[0].prepend(backbutton);
document.querySelectorAll('.navbar-collapse .navbar-nav')[0].prepend(drivebutton);

document.querySelectorAll('.navbar-collapse .navbar-nav')[0].prepend(chatbutton);
		const raven = document.querySelector('.raven-chat');
	raven.classList.add("nav-item");
const elementToMove = document.querySelector('#chatbutton');
const newParent = elementToMove.parentNode;
newParent.prepend(raven);

document.querySelector("#body").appendChild(formclose);
   
};






