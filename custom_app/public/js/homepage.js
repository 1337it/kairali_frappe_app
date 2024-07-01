      function toggleFullscreen() {
            if (!document.fullscreenElement &&
                !document.mozFullScreenElement &&
                !document.webkitFullscreenElement &&
                !document.msFullscreenElement) {
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        }

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


var pwaworker = '<script> if (typeof navigator.serviceWorker !== "undefined") {navigator.serviceWorker.register("/worker/index.js")}</script><script> if (typeof navigator.serviceWorker !== "undefined") {navigator.serviceWorker.register("/next.config.js")}</script>';
$('body').append(pwaworker);

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

const listclose = document.createElement('th');

      listclose.innerHTML = '<button class="fa fa-close" id="listclose" style="">';





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
	document.querySelector("#body").appendChild(listclose);
	$.each(["Open AI Settings", "HD Form Script", "Commit Settings", "Recorder Suggested Index", "OAuth Client Role", "System Health Report Failing Jobs", "System Health Report Errors", "System Health Report Queue", "System Health Report Tables", "System Health Report Workers", "System Health Report", "Multi Item", "Ledger Health Monitor Company", "Ledger Health Monitor", "Ledger Health", "Shift Assignment Tool", "Stock Ledger Entry Child", "Stock Movement Child", "TEST4", "test45", "Item Price Child", "Item Price Table", "Custom Field", "Transaction Deletion Record Details", "Bulk Salary Structure Assignment", "Insights Query Result", "Push Notification Settings", "Permission Inspector", "Raven Settings", "Asset Shift Factor", "Asset Shift Allocation", "Job Offer Term Template", "Bulk Transaction Log", "Repost Allowed Types", "Repost Accounting Ledger Settings", "Price Lookup Settings", "Drive Instance Settings", "HD Ticket", "Support Ticket Details", "Genie Settings", "Plant Floor", "Drive Entity Log", "Bisect Nodes", "Process Subscription", "Bisect Accounting Statements", "Raven User", "HD Notification", "HD Action", "PWA Notification", "Subcontracting BOM", "Drive DocShare", "HD Service Level Agreement", "Unreconcile Payment Entries", "Unreconcile Payment", "Commit Organization", "Audit Trail", "Insights Query Variable", "Serial and Batch Bundle", "HD Ticket Feedback Option", "Vehicle Service Item", "HD Ticket Template Field", "Recorder Query", "Recorder", "Commit Project Branch", "Commit Project", "Asset Activity", "BOM Creator", "BOM Creator Item", "Repost Accounting Ledger Items", "Repost Accounting Ledger", "Portal User", "HD Escalation Rule", "Amended Document Naming Settings", "Job Card Scheduled Time", "Stock Reservation Entry", "Warehouse", "Workspace Custom Block", "Custom HTML Block", "Closing Stock Balance", "Changelog Feed", "Github Token", "Github Settings", "Raven Message Reaction", "Insights Notebook Page", "Insights Notebook", "Insights Chart", "Drive Document", "Process Payment Reconciliation", "Insights Alert", "RQ Job", "Insights Query Execution Log", "Marketing Campaign", "Employee Feedback Criteria", "Process Payment Reconciliation Log", "Process Payment Reconciliation Log Allocations", "Drive Entity Tag", "Drive Tag", "Reminder", "Account Closing Balance", "Workspace Number Card", "Raven Channel Member", "Raven Channel", "Raven Message", "Insights Team", "Insights Team Member", "HD Team Member", "Insights Resource Permission", "HD Customer", "Drive Favourite", "Insights Query Transform", "Incoterm", "HD Preset Filter Item", "HD Preset Filter", "HD Team Item", "Workstation Type", "HD Canned Response", "Asset Depreciation Schedule", "WhatsApp Message Fields", "WhatsApp Templates", "WhatsApp Notification Log", "WhatsApp Notification", "WhatsApp Message", "WhatsApp Settings", "Repost Payment Ledger Items", "Repost Payment Ledger", "HD Article Feedback", "Insights Table Import", "Submission Queue", "Insights Table Column", "Serial and Batch Entry", "Tax Withheld Vouchers", "RQ Worker", "Employee Performance Feedback", "Employee Feedback Rating", "Job Requisition", "Appraisal KRA", "Appraisal", "HD Ticket Comment", "Appraisee", "KRA", "Goal", "Appraisal Cycle", "Insights Dashboard", "Insights Dashboard Item", "Insights Query Chart", "Insights Settings", "Web Form List Column", "Inventory Dimension", "Logs To Clear", "CRM Note", "BOM Update Batch", "Document Naming Settings", "Insights Table", "Insights Table Link", "HR Addon Settings", "Workspace Quick List", "Payment Ledger Entry", "Employee Checkins", "Workday", "Daily Hours Detail", "Weekly Working Hours", "Prospect Opportunity", "Subcontracting Receipt", "Subcontracting Receipt Supplied Item", "Subcontracting Receipt Item", "HD Desk Account Request", "HD Portal Signup Request", "Subcontracting Order", "Subcontracting Order Supplied Item", "Subcontracting Order Item", "Subcontracting Order Service Item", "Integration Request", "HD Organization", "HD Organization Contact Item", "HD Ticket Activity", "BOM Update Log", "Insights Query Table", "Telephony Call Type", "HD Ticket Template", "HD Agent", "HD Team", "Insights Data Source", "Workflow Action Permitted Role", "Call Log", "Employee", "Insights Query Column", "Item Barcode", "Variant Field", "HD Article Sub Category Item", "HD Ticket Priority", "HD Article", "HD Ticket Type", "HD Article Category", "Lead", "Stock Entry Detail", "Insights Query", "Gratuity", "Training Feedback", "Journal Entry", "Sales Invoice", "Company", "Tax Category", "Item Tax Template", "Asset", "Employee Advance", "Document Share Key", "Cost Center Allocation Percentage", "Cost Center Allocation", "Repost Item Valuation", "User", "Currency Exchange Settings", "System Settings", "HD Article Item", "Drive Entity", "Data Import Log", "Employee Cost Center", "HD Service Holiday List", "HD Holiday", "Ledger Merge Accounts", "Ledger Merge", "Newsletter Attachment", "Exit Interview", "Bulk Transaction Log Detail", "Advance Tax", "Competitor Detail", "Competitor", "Print Format Field Template", "Stock Reposting Settings", "IMAP Folder", "Network Printer Settings", "Overdue Payment", "Job Card Scrap Item", "CRM Settings", "Asset Capitalization Service Item", "Package Import", "Asset Capitalization Asset Item", "Asset Capitalization Stock Item", "Package Release", "Asset Capitalization", "Package", "Currency Exchange Settings Result", "Currency Exchange Settings Details", "Party Specific Item", "DocType State", "Prospect", "Prospect Lead", "Party Link", "Payment Reconciliation Allocation", "Discussion Reply", "Discussion Topic", "South Africa VAT Settings", "South Africa VAT Account", "Full and Final Asset", "Full and Final Outstanding Statement", "Full and Final Statement", "SLA Fulfilled On Status", "HD Service Level Agreement Fulfilled On Status", "Webhook Request Log", "Form Tour Step", "Form Tour", "Asset Repair Consumed Item", "Employee Grievance", "Grievance Type", "Supplier Group Item", "Supplier Item", "Campaign Item", "Sales Partner Item", "Territory Item", "Customer Group Item", "Customer Item", "Personal Data Deletion Step", "Production Plan Item Reference", "Whitelabel Setting", "POS Search Fields", "Interviewer", "Skill Assessment", "Interview Feedback", "Interview Detail", "User Group", "User Group Member", "Interview", "Interview Type", "Expected Skill Set", "Interview Round", "Transaction Deletion Record Item", "Transaction Deletion Record", "Employee Referral", "Salary Slip Leave", "Quality Inspection Parameter Group", "User Type Module", "User Select Document Type", "User Document Type", "User Type", "Quality Inspection Parameter", "Production Plan Sub Assembly Item", "Module Profile", "Voice Call Settings", "Job Card Operation", "Sub Operation", "Bank Reconciliation Tool", "Incoming Call Handling Schedule", "Incoming Call Settings", "DocType Layout", "DocType Layout Field", "Workspace Link", "Query Parameters", "Auto Repeat Day", "Putaway Rule", "Accounting Dimension Filter", "Allowed Dimension", "Applicable On Account", "Non Conformance", "Log Setting User", "Log Settings", "UAE VAT Account", "UAE VAT Settings", "Website Theme Ignore App", "Advance Taxes and Charges", "Document Naming Rule Condition", "Document Naming Rule", "Leave Policy Assignment", "Console Log", "System Console", "SendCloud", "Gratuity Rule Slab", "Gratuity Rule", "Gratuity Applicable Component", "PSOA Cost Center", "PSOA Project", "Process Statement Of Accounts Customer", "Video Settings", "Navbar Settings", "Navbar Item", "LetMeShip", "Parcel Service Type", "Parcel Service Type Alias", "Parcel Service", "Opportunity Lost Reason Detail", "OAuth Scope", "Quotation Lost Reason Detail", "Shipment Delivery Note", "Shipment Parcel Template", "Shipment Parcel", "Shipment", "Email Digest Recipient", "Pause SLA On Status", "HD Pause Service Level Agreement On Status", "Payroll Settings", "Process Statement Of Accounts", "Installed Applications", "Installed Application", "Onboarding Permission", "POS Payment Method", "Social Link Settings", "Onboarding Step Map", "POS Opening Entry Detail", "Module Onboarding", "Income Tax Slab Other Charges", "Number Card Link", "Color", "Downtime Entry", "Web Template", "Web Template Field", "Web Page Block", "Web Page View", "Number Card", "Onboarding Step", "Journal Entry Template Account", "Journal Entry Template", "Dashboard Settings", "Employee Other Income", "Income Tax Slab", "Lower Deduction Certificate", "POS Opening Entry", "Dashboard Chart Field", "Production Plan Material Request Warehouse", "POS Invoice Merge Log", "POS Invoice Reference", "POS Invoice Item", "POS Invoice", "Workspace", "Workspace Shortcut", "Workspace Chart", "Report Filter", "Report Column", "Appointment Letter", "Appointment Letter content", "Appointment Letter Template", "Dunning Letter Text", "Dunning Type", "Appointment Booking Slots", "Process Deferred Accounting", "List View Settings", "Import Supplier Invoice", "Notification Subscribed Document", "Asset Movement Item", "Server Script", "Tag Link", "DocType Link", "DocType Action", "Scheduled Job Log", "Scheduled Job Type", "Assignment Rule Day", "Global Search DocType", "Notification Settings", "Availability Of Slots", "Quick Stock Balance", "Global Search Settings", "Salary Slip Loan", "Customer Credit Limit", "Appointment Booking Settings", "Appointment", "Notification Log", "POS Field", "Google Drive", "Data Import", "Bank Statement Import", "Contact Phone", "Contact Email", "Access Log", "Session Default Settings", "Session Default", "Accounting Dimension Detail", "Pick List", "Pick List Item", "Google Calendar", "Dunning", "Email Campaign", "Campaign Email Schedule", "Google Contacts", "Google Settings", "Employee Checkin", "Communication Medium", "Communication Medium Timeslot", "Expense Taxes and Charges", "Item Manufacturer", "LDAP Group Mapping", "Quality Feedback Parameter", "Quality Feedback", "Quality Feedback Template Parameter", "Quality Feedback Template", "Quality Meeting Agenda", "Quality Meeting Minutes", "Quality Action Resolution", "Quality Review Objective", "Quality Goal Objective", "Quality Procedure Process", "Warehouse Type", "Communication Link", "Issue Priority", "Leave Ledger Entry", "Website Route Redirect", "Accounting Dimension", "Service Level Priority", "HD Service Level Priority", "Task Type", "Milestone", "Milestone Tracker", "Employee Training", "Employee Skill Map", "Designation Skill", "Employee Skill", "Skill", "Pricing Rule Brand", "Pricing Rule Item Code", "Pricing Rule Item Group", "Promotional Scheme Price Discount", "Promotional Scheme Product Discount", "Energy Point Settings", "Review Level", "Stock Entry Type", "Dashboard Chart Link", "Job Card Time Log", "Discounted Invoice", "Invoice Discounting", "Service Day", "HD Service Day", "Assignment Rule", "Assignment Rule User", "Project Template Task", "Project Template", "Website Route Meta", "Website Meta Tag", "Personal Data Deletion Request", "Homepage Section", "Homepage Section Card", "Promotional Scheme", "Comment", "Dashboard Chart Source", "Tally Migration", "Pricing Rule Detail", "Chart of Accounts Importer", "Token Cache", "Personal Data Download Request", "Connected App", "Dashboard", "Dashboard Chart", "Document Follow", "Website Attribute", "Website Filter Field", "Opportunity Lost Reason", "Lost Reason Detail", "Service Level Agreement", "Bank Transaction Payments", "Item Tax Template Detail", "Employee Group Table", "Employee Group", "Bank Account Subtype", "Bank Account Type", "Plaid Settings", "Bank Transaction Mapping", "Bank Transaction", "Video", "Quality Meeting", "Quality Procedure", "Route History", "Quality Goal", "Quality Review", "Quality Action", "Market Segment", "Sales Stage", "Event Participants", "Email Digest", "Delivery Settings", "Cashier Closing Payments", "Payment Order", "Payment Order Reference", "Tax Withholding Rate", "Routing", "QuickBooks Migrator", "Job Card", "Job Card Item", "Prepared Report", "Energy Point Log", "Energy Point Rule", "Cashier Closing", "Job Applicant Source", "Sales Partner Type", "POS Closing Entry Taxes", "POS Closing Entry Detail", "POS Closing Entry", "View Log", "Blanket Order Item", "Blanket Order", "Slack Webhook URL", "Workflow Action", "Support Search Source", "HD Support Search Source", "Travel Request Costing", "Travel Itinerary", "Identification Document Type", "Purpose of Travel", "Travel Request", "Retention Bonus", "Asset Value Adjustment", "Additional Salary", "Employee Separation", "Employee Tax Exemption Sub Category", "Employee Separation Template", "Employee Boarding Activity", "Employee Onboarding Template", "Employee Onboarding", "Asset Finance Book", "Location", "Item Default", "UOM Conversion Factor", "UOM Category", "Allowed To Transact With", "Contract Fulfilment Checklist", "Contract Template Fulfilment Terms", "Contract Template", "Success Action", "Closed Document", "Accounting Period", "Tax Withholding Account", "Tax Withholding Category", "Employee Promotion", "Exchange Rate Revaluation Account", "Exchange Rate Revaluation", "Employee Property History", "Employee Transfer", "Staffing Plan", "Staffing Plan Detail", "Finance Book", "Taxable Salary Slab", "Employee Tax Exemption Proof Submission", "Employee Tax Exemption Proof Submission Detail", "Employee Tax Exemption Declaration Category", "Employee Tax Exemption Declaration", "Employee Tax Exemption Category", "Employee Benefit Claim", "Salary Structure Assignment", "Employee Benefit Application Detail", "Shift Request", "Employee Benefit Application", "Shift Assignment", "Shift Type", "Employee Grade", "Employee Incentive", "Leave Policy", "Leave Policy Detail", "Attendance Request", "Leave Encashment", "Leave Period", "Payroll Period", "Payroll Period Date", "Compensatory Leave Request", "Contract", "Department Approver", "Bank", "Loyalty Point Entry Redemption", "Auto Repeat", "Data Export", "Item Alternative", "Subscription Settings", "Subscription Invoice", "Subscription Plan Detail", "Subscription Plan", "List Filter", "Projects Settings", "Daily Work Summary Group", "Daily Work Summary Group User", "Transaction Log", "Quality Inspection Template", "Loyalty Program Collection", "Loyalty Program", "Loyalty Point Entry", "Coupon Code", "Project Update", "Share Balance", "Share Type", "Share Transfer", "Shareholder", "User Social Login", "Material Request Plan Item", "Payroll Employee Detail", "Linked Location", "Social Login Key", "Production Plan", "POS Profile User", "Asset Maintenance Log", "Payroll Entry", "Calendar View", "Asset Repair", "Asset Maintenance Team", "Asset Maintenance Task", "Asset Maintenance", "Driver", "Driving License Category", "Delivery Stop", "Delivery Trip", "Training Program", "Expense Claim Advance", "Opportunity Type", "Issue Type", "Activity Log", "Webhook Data", "Webhook Header", "Webhook", "S3 Backup Settings", "Role Profile", "Item Variant Settings", "Opening Invoice Creation Tool Item", "Opening Invoice Creation Tool", "POS Settings", "Print Style", "Payment Schedule", "Payment Terms Template", "Payment Terms Template Detail", "Payment Term", "Subscription", "Project Type", "User Permission", "Supplier Scorecard Period", "Bank Account", "Supplier Scorecard", "Supplier Scorecard Standing", "Supplier Scorecard Scoring Standing", "Supplier Scorecard Criteria", "Supplier Scorecard Scoring Criteria", "Supplier Scorecard Variable", "Supplier Scorecard Scoring Variable", "Domain Settings", "Has Domain", "Domain", "Salutation", "Gender", "Employee Health Insurance", "Customs Tariff Number", "Email Rule", "Newsletter Email Group", "HD Settings", "Support Settings", "Role Permission for Page and Report", "Custom Role", "BOM Website Item", "BOM Website Operation", "Dynamic Link", "Custom DocPerm", "Deleted Document", "Website Sidebar", "Website Sidebar Item", "Party Type", "Bank Guarantee", "Email Queue Recipient", "POS Customer Group", "POS Item Group", "Daily Work Summary", "Training Result Employee", "Training Result", "Maintenance Team Member", "Kanban Board Column", "Kanban Board", "BOM Scrap Item", "LDAP Settings", "Dropbox Settings", "Lead Source", "Vehicle Service", "Vehicle Log", "OAuth Provider Settings", "Vehicle", "Auto Email Report", "Note Seen By", "OAuth Authorization Code", "OAuth Bearer Token", "OAuth Client", "Training Event Employee", "Training Event", "Salary Component Account", "Interest", "Expense Claim Account", "Bulk Update", "Salary Component", "Salary Detail", "Payment Entry Deduction", "Salary Slip Timesheet", "Sales Invoice Timesheet", "Payment Entry Reference", "Payment Entry", "Tag", "Budget Account", "Budget", "Sales Invoice Payment", "Cheque Print Template", "Asset Movement", "Homepage", "Email Flag Queue", "Work Order Item", "Unhandled Email", "User Email", "Portal Settings", "Portal Menu Item", "Email Domain", "Request for Quotation Supplier", "Project User", "Asset Category Account", "Depreciation Schedule", "Asset Category", "Request for Quotation Item", "Request for Quotation", "Desktop Icon", "Translation", "Production Plan Material Request", "Employee Attendance Tool", "Manufacturer", "Payment Gateway Account", "Payment Request", "Price List Country", "Shipping Rule Country", "Tax Rule", "Item Variant Attribute", "Dependent Task", "Task Depends On", "Block Module", "Activity Cost", "Email Unsubscribe", "Email Group Member", "Email Group", "Offer Term", "Job Offer Term", "Job Offer", "Website Theme", "Stock Reconciliation Item", "DocShare", "Mode of Payment Account", "Workstation Working Hour", "Manufacturing Settings", "Operation", "Help Article", "Help Category", "Work Order Operation", "Fiscal Year Company", "Item Variant", "Item Attribute Value", "Item Attribute", "Email Account", "Web Form Field", "Web Form", "Party Account", "Language", "Print Settings", "Notification Recipient", "Notification", "Landed Cost Taxes and Charges", "Landed Cost Voucher", "Payment Reconciliation Invoice", "Payment Reconciliation Payment", "Payment Reconciliation", "Email Template", "Address Template", "Pricing Rule", "Version", "HR Settings", "Shipping Rule Condition", "Shipping Rule", "Buying Settings", "Selling Settings", "Stock Settings", "Accounts Settings", "Currency Exchange", "Product Bundle", "Sales Order", "Customer", "Event", "Sales Invoice Item", "Purchase Receipt Item", "Delivery Note", "Quotation", "Purchase Order Item", "Note", "POS Profile", "Product Bundle Item", "Purchase Invoice Item", "Supplier Quotation Item", "Supplier Quotation", "Purchase Order", "Purchase Invoice", "Purchase Receipt", "Purchase Taxes and Charges", "Serial No", "Item", "Global Defaults", "Item Price", "Installation Note", "Quality Inspection", "Website Settings", "Sales Taxes and Charges", "Delivery Note Item", "Sales Team", "Sales Partner", "Packing Slip", "Stock Entry", "Packing Slip Item", "Stock Reconciliation", "Web Page", "Blog Post", "Item Group", "Blogger", "About Us Settings", "Blog Settings", "Report", "Item Customer Detail", "Purchase Invoice Advance", "Blog Category", "Opportunity", "Salary Structure", "Website Slideshow", "Material Request", "Website Slideshow Item", "About Us Team Member", "Project", "Item Reorder", "Sales Order Item", "Quotation Item", "BOM Explosion Item", "Batch", "Activity Type", "Timesheet Detail", "Timesheet", "Website Item Group", "Top Bar Item", "Company History", "Maintenance Visit Purpose", "Maintenance Schedule Item", "Maintenance Schedule Detail", "UOM Conversion Detail", "Landed Cost Item", "Material Request Item", "Landed Cost Purchase Receipt", "Item Tax", "Item Supplier", "Item Website Specification", "Item Quality Inspection Parameter", "Packed Item", "SMS Parameter", "Target Detail", "Brand", "Opportunity Item", "Installation Note Item", "BOM Item", "BOM Operation", "Production Plan Item", "Production Plan Sales Order", "Leave Block List Date", "Leave Block List Allow", "Holiday", "Expense Claim Detail", "Employee Education", "Employee External Work History", "Employee Internal Work History", "Appraisal Goal", "Appraisal Template Goal", "Quality Inspection Reading", "Purchase Order Item Supplied", "Purchase Receipt Item Supplied", "Sales Invoice Advance", "Journal Entry Account", "Monthly Distribution Percentage", "Bank Clearance Detail", "Workflow Transition", "Workflow Document State", "Has Role", "DocPerm", "DocField", "DefaultValue", "Customize Form Field", "Contact Us Settings", "Leave Type", "Leave Allocation", "Leave Application", "Leave Block List", "DocType", "Department", "Issue", "Account", "Task", "Stock Ledger Entry", "Job Applicant", "Customize Form", "Communication", "Currency", "Price List", "Upload Attendance", "Cost Center", "Print Format", "Fiscal Year", "BOM", "Country", "Patch Log", "Error Log", "Job Opening", "Address", "Contact", "Newsletter", "Maintenance Visit", "Warranty Claim", "Maintenance Schedule", "Bin", "UOM", "Territory", "SMS Settings", "Sales Person", "Print Heading", "Supplier Group", "Terms and Conditions", "Quotation Lost Reason", "Customer Group", "SMS Center", "Authorization Rule", "Campaign", "Workstation", "Work Order", "Salary Slip", "Leave Control Panel", "Holiday List", "Expense Claim", "Employment Type", "Branch", "Attendance", "Designation", "Supplier", "Sales Taxes and Charges Template", "Purchase Taxes and Charges Template", "Period Closing Voucher", "GL Entry", "Bank Clearance", "Monthly Distribution", "Property Setter", "Module Def", "Client Script", "Role", "Workflow State", "Workflow Action Master", "Workflow", "Website Script", "Page", "File", "BOM Update Tool", "Mode of Payment", "Rename Tool", "Letter Head", "Email Queue", "Appraisal Template", "ToDo", "SMS Log", "Authorization Control", "Industry Type", "Expense Claim Type"], function(i, doctype) {
	
			
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
frappe.ui.form.on(doctype, "refresh", function(frm) {
	var path = '[href="'+window.location.pathname+'"].ellipsis';
$(".list-row-container").removeClass("selecteditem");
		$(path).parent().parent().parent().parent().parent().addClass('selecteditem');
	
console.log('Path 1 is '+path);
	});		
	});
});

window.onload = function() {
	
	var path = '[href="'+window.location.pathname+'"].ellipsis';
$(".list-row-container").removeClass("selecteditem");
		$(path).parent().parent().parent().parent().parent().addClass('selecteditem');	
   var selection2 = document.querySelector('[data-page-route="Workspaces"].page-container') !== null;

if(selection2){
	var deskitems = document.querySelectorAll('[data-page-route="Workspaces"] .ellipsis');
for (var i = 0, len = deskitems.length; i < len; i++) {
var dur = ((i/20) + 0.5)+'s';
var del = (i/20)+'s';
 
const animstyle = document.createAttribute("style");
deskitems[i].attributes.setNamedItem(animstyle);
deskitems[i].attributes.style.value ='animation:hidden '+del+' ease, css-0 '+dur+' ease '+del;
}	
}
	
	else {
		frappe.set_route("Workspaces", "Home");
window.history.go(-1);
	}
	

   
	

	formclose.addEventListener('click', () => {
frappe.set_route("List",frappe.get_route()[1] ,"List");

      });	
	listclose.addEventListener('click', () => {

		document.getElementById("formclose").attributes.style.value ="left: calc(40px + 2vw)!important;";
		document.getElementById('page-'+frappe.get_route()[1]).attributes.style.value ="width:97vw!important;";


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





