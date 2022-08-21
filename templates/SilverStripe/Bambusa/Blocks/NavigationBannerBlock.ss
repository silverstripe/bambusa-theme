<div class="navigation-banner">
    <div class="navigation-banner__banner" <% if $BackgroundImage %>style="background-image: url($BackgroundImage.Link);"<% end_if %>>
        <div class="container">
            <div class="navigation-banner__header">
                <div class="navigation-banner__fore-title">
                    $ForeTitle
                </div>
                <% if $Title && $ShowTitle %>
                    <p class="navigation-banner__title h1">$Title</p>
                <% end_if %>
                <div class="navigation-banner__subtitle">
                    $Subtitle
                </div>
            </div>
            <% if $Items %>
                <div class="navigation-banner__items">
                    <div class="row justify-content-center">
                        <% loop $Items %>
                            <div class="col-6 $NavigationBannerBlock.BootstrapItemColumnClassNames">
                                <a class="navigation-banner__item" href="$LinkURL"$TargetAttr>$Title</a>
                            </div>
                        <% end_loop %>
                    </div>
                </div>
            <% end_if %>
        </div>
    </div>
</div>
