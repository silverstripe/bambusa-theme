<% if $Step.Type == 'Question' %>
    <div data-step="$Step.ID" class="step<% if $FirstStep.ID == $Step.ID %> step--first<% end_if %>">
        <form action="$Controller.Link('getNextStepForAnswer')" method="post" class="decision-tree-step__form step-form">
            <% with $Step %>
                <fieldset class="decision-tree-step__fieldset">
                    <legend class="step-legend <% if $Content %>step-legend--withcontent<% end_if %>">
				<span class="step-title">
					<span class="step-number">{$PositionInPathway}.</span>
					<span class="step-title-inner">$Title</span>
				</span>
                        <% if $Content %><span class="step-content">$Content</span><% end_if %>
                    </legend>
                    <% if $Answers %>
                        <ul class="optionset step-options">
                            <% loop $Answers %>
                                <li>
                                    <input id="$ID" class="radio step-option" name="stepanswerid" type="radio" value="$ID"<% if $Top.Controller.getIsAnswerSelected($ID) %> checked<% end_if %> data-answer="answer" />
                                    <label for="$ID">$Title</label>
                                </li>
                            <% end_loop %>
                        </ul>
                    <% end_if %>
                </fieldset>
                <%-- Back button --%>
                <% if $TreeOrigin.ParentElement.Layout == 'Multiple' && $TreeOrigin.ID != $ID %>
                    <div class="decision-tree-step__actions">
                        <button
                            type="button"
                            class="decision-tree-step__back-button step-button btn btn-secondary"
                            data-action="back"
                            <% if $ParentAnswer %>data-target-step="$ParentAnswer.Question.ID"<% end_if %>
                        >
                            Back
                        </button>
                        <button type="button" class="step-button btn btn-primary" data-action="restart-tree" data-target="$Top.Controller.ParentController.Link" data-target-step="$TreeOrigin.ID">Start again?</button>
                    </div>
                <% end_if %>
                <%-- /Back button --%>
            <% end_with %>
        </form>

        <div class="nextstep" aria-live="polite">
            <% if $Controller.getNextStepFromSelectedAnswer($Step.ID) %>
                <% include DecisionTreeStep Step=$Controller.getNextStepFromSelectedAnswer($Step.ID), Controller=$Controller %>
            <% end_if %>
        </div>
    </div>
<% else %>
    <div data-step="$Step.ID" class="step step--result" aria-live="polite">
        <% with $Step %>
            <% if $Title && not $HideTitle %><div class="step-title h2">$Title</div><% end_if %>
            <div class="step-content">
                <% if $Content %>$Content<% end_if %>
                <button type="button" class="step-button btn btn-primary" data-action="restart-tree" data-target="$Top.Controller.ParentController.Link" data-target-step="$TreeOrigin.ID">Start again?</button>
            </div>
        <% end_with %>
    </div>
<% end_if %>
