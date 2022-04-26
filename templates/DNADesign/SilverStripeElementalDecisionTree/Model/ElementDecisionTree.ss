<div
    class="decision-tree"
    data-page-progression="<% if $Layout == 'Multiple' %>multiple<% else %>single<% end_if %>"
    data-first-step="$FirstStep.ID"
>
    <div class="decision-tree__header">
        <% if $Title && $ShowTitle %>
            <h2 class="accordion__title">$Title</h2>
        <% end_if %>
        <% if $Introduction %>
            <div class="decision-tree__intro">$Introduction</div>
        <% end_if %>
    </div>

    <div class="decision-tree__main">
        <% include DNADesign\SilverStripeElementalDecisionTree\Model\DecisionTreeStep Step=$FirstStep, Controller=$Controller %>
    </div>
</div>

<% require javascript("dnadesign/silverstripe-elemental-decisiontree:javascript/decision-tree.src.js") %>
<% if $Layout == 'Multiple' %>
    <% require javascript("themes/bambusa/dist/js/components/decision-tree.js") %>
<% end_if %>
