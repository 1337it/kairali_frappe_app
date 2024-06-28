

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

      formclose.innerHTML = '<button class="fa fa-close" id="formclose" style="">';

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


            

$(document).on('app_ready', function() {
	
document.querySelector("#body").appendChild(formclose);
	$.each(["Opportunity", "Quotation", "Supplier Quotation", 
		"Sales Invoice", "Delivery Note",  "Sales Order",
		"Purchase Invoice", "Purchase Receipt", "Purchase Order", "Item"], function(i, doctype) {
	
			
		frappe.ui.form.on(doctype, "onload", function(frm) {
var selectionlist = document.querySelector('[data-page-route^="List/'+doctype+'"]') !== null;
if(selectionlist){

document.getElementById("formclose").attributes.style.value ="left: calc(40px + 22vw)!important;";	
	document.getElementById('page-'+doctype).attributes.style.value ="width:77vw!important;";
}
	
	else {


document.getElementById("formclose").attributes.style.value ="left: calc(40px + 2vw)!important;";
		document.getElementById('page-'+doctype).attributes.style.value ="width:97vw!important;";

		
	}
		
		// your code here	
		});
	});
});

window.onload = function() {
$(".list-row-container").removeClass("selecteditem");
		$('[href="'+window.location.pathname+'"]').parent().parent().parent().parent().parent().addClass('selecteditem');
	
   var selection2 = document.querySelector('[data-page-route="Workspaces"].page-container') !== null;

if(selection2){
		
}
	
	else {
		frappe.set_route("Workspaces", "Home");
window.history.go(-1);
	}
	

   
	

	formclose.addEventListener('click', () => {
frappe.set_route("List",frappe.get_route()[1] ,"List");

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



	
};





