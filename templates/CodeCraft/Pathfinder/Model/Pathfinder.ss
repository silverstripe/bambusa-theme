<h2>$Title</h2>
$StartContent
<% if $Questions %>
    <a href="$StartLink" title="$StartButtonText" class="btn <% if $HasProgress %>btn-secondary<% else %>btn-primary<% end_if %>">$StartButtonText</a>
    <% if $HasProgress %>
        <a href="$ProgressLink" title="$ContinueButtonText" class="btn btn-primary">$ContinueButtonText</a>
    <% end_if %>
<% else %>
    <p class="message error">
        <%t CodeCraft\Pathfinder\Model\Pathfinder.NO_QUESTIONS_TEXT "Sorry, no questions have been added to this Pathfinder yet." %>
    </p>
<% end_if %>
