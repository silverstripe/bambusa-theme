<% include PathfinderFocus %>
<div class="pathfinder__results">
    <div class="pathfinder__result-content">
        <% if $Results %>
            $ResultsFoundContent

            <ul class="pathfinder__results">
                <% loop $Results %>
                    <li class="pathfinder__result">
                        <a href="$Link" title="$Title" class="pathfinder__result-link">$MenuTitle</a>
                    </li>
                <% end_loop %>
            </ul>
        <% else %>
            $ResultsNotFoundContent
        <% end_if %>
    </div>
    <a href="$Link('reset')" class="btn btn-secondary">Start again?</a>
</div>
<div class="pathfinder__support">
    $SupportContent
</div>
