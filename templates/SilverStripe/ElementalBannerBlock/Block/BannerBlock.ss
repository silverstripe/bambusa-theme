<div class="banner-block">
    <div class="banner-block__content">
        <% if $Title && $ShowTitle %>
            <h2 class="banner-block__title h4">$Title</h2>
        <% end_if %>
        <p><span>$Content.Plain</span></p>
        <% if $CallToActionLink.Page.Link %>
        <% with $CallToActionLink %>
            <a href="{$Page.Link}" class="banner-block__call-to-action"
               <% if $TargetBlank %>target="_blank"<% end_if %>
                <% if $Description %>title="{$Description.ATT}"<% end_if %>>
                {$Text.XML}
            </a>
        <% end_with %>
        <% end_if %>
    </div>
    <% if $File %>
    <div class="banner-block__image">
        <div class="banner-block__image-inner" style="background-image: url('$File.ScaleMaxHeight(660).URL'); background-position: {$File.PercentageX}% {$File.PercentageY}%"></div>
    </div>
    <% end_if %>
</div>
