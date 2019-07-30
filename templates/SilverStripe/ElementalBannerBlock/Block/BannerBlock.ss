<a class="banner-block"
  <% if $CallToActionLink.Page.Link %>
  <% with $CallToActionLink %>
  href="{$Page.Link}"
  <% if $TargetBlank %>target="_blank"<% end_if %>
  <% if $Description %>title="{$Description.ATT}"<% end_if %>
  <% end_with %>
  <% end_if %>
>
<span class="banner-block__flex-box" role="banner">
    <span class="banner-block__content">
        <% if $Title && $ShowTitle %>
            <span role="heading" class="banner-block__title h4">$Title</span>
        <% end_if %>
        <p>$Content.Summary(30)</p>
        <% if $CallToActionLink.Text %>
        <span class="banner-block__call-to-action">{$CallToActionLink.Text.XML}</span>
        <% end_if %>

    </span>
    <% if $File %>
    <% with $File %>
    <span class="banner-block__image" role="img" aria-label="$Title">
        <span class="banner-block__image-inner" style="background-image: url('$ScaleMaxHeight(660).URL'); background-position: {$PercentageX}% {$PercentageY}%"></span>
    </span>
    <% end_with %>
    <% end_if %>
</span>
</a>
