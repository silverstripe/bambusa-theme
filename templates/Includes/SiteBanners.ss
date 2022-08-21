<% loop $SiteConfig.SiteBanners %>
    <div id="site-banner-$ID" class="site-banner site-banner--$Type" role="alert" data-id="$ID" aria-hidden="true">
        <div class="container">
            <div class="site-banner__layout">
                <div class="site-banner__content">
                    $Content
                </div>
                <% if $Dismiss %>
                    <button class="site-banner-close site-banner__close" aria-label="Close" data-id="$ID">×</button>
                <% end_if %>
            </div>
        </div>
    </div>
<% end_loop %>
