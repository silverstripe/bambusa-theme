<% if $ShowPageUtilities %>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="page-utilities">
                    <% if not $HidePrintButton %>
                        <button onClick="window.print();" class="btn btn-link pull-right btn-outline-secondary page-utilities__btn page-utilities__btn--print">
                            <i class="fa fa-print page-utilities__btn-img page-utilities__btn-img--print" aria-hidden="true"></i>
                            <span class="page-utilities__btn-label"><%t Page.PRINT "Print" %></span>
                        </button>
                    <% end_if %>
                    <button onClick="document.getElementById('top').focus();" class="btn btn-link pull-right btn-outline-secondary page-utilities__btn">
                        <i class="fa fa-arrow-up page-utilities__btn-img page-utilities__btn-img--arrow btn__arrow--up" aria-hidden="true"></i>
                        <span class="page-utilities__btn-label"><%t Page.BACK_TO_TOP "Back to top" %></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
<% end_if %>
