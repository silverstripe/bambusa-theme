$CurrentStepNumber
<% if $CurrentQuestion %>
    <% with $CurrentQuestion %>
        <h2>$QuestionText</h2>
        <% if $Description %>
            $Description
        <% end_if %>
    <% end_with %>
<% else %>
    No Question to display
<% end_if %>
$Form
