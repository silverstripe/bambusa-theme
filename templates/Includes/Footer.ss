<div class="container">
    <div class="row justify-content-center justify-content-md-between">
        <% with $MenuSet('Footer') %>
            <% cached 'FooterMenuSet', $LastEdited, $MenuItems.max('LastEdited'), $MenuItems.count %>
                <% if $MenuItems %>
                    <nav class="footer-nav-links col-auto mt-2 mb-3" aria-label="<%t CWP_Theme.FOOTER 'Footer' %>" role="navigation">
                        <% loop $MenuItems %>
                            <a href="$Link" class="$LinkingMode <% if $LinkingMode = current %> active<% end_if %>"<% if $IsNewWindow %> target="_blank"<% end_if %>>
                                $MenuTitle.XML
                            </a>
                        <% end_loop %>
                    </nav>
                <% end_if %>
            <% end_cached %>
        <% end_with %>
        <div class="col-auto">
            <% include SocialBar %>
        </div>
    </div>

    <hr class="footer-site-divider">

    <div class="row justify-content-between footer-logo">
        <small class="col-auto order-2 pb-3">&copy; $CurrentDatetime.Format(Y) $SiteConfig.Title</small>

        <div class="col-auto order-1 order-md-3 pb-3">
            <a class="col-auto" href="https://www.silverstripe.com/">
                <% include SilverStripeLogo %>
            </a>
        </div>
    </div>
</div>
