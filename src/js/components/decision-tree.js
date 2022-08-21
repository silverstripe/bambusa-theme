/* eslint-disable */
import jQuery from 'jquery';
/* eslint-enable */

/**
 * Add support for a multi-page decision tree
 *
 * This is a supplement for the decision tree "vendor js", see
 * dnadesign/silverstripe-elemental-decisiontree:javascript/decision-tree.src.js
 *
 * WARNING: This script MUST be used in conjunction with the vendor decision-tree js!!
 */
jQuery(document).ready(($) => {
  /**
   * Update the decision tree view to display the "current step"
   */
  // eslint-disable-next-line no-param-reassign
  $.fn.updateView = function () {
    const stepId = $(this).data('current-step');
    const $step = $(this).find(`[data-step="${stepId}"]`);

    // Clear all options
    $('.step-option').prop('checked', false);

    if (!$step.length) {
      // eslint-disable-next-line no-console
      console.warn('An error has occurred');

      return;
    }

    // Hide all other steps
    $('.step').not(`[data-step="${stepId}"]`).each(function () {
      $(this).hideStep();
    });

    // Show decision tree header?
    $(this).find('.decision-tree__header')
      .toggleClass('decision-tree__header--hidden', $(this).data('first-step') !== $step.data('step'));

    // Show current step
    $step.showStep();

    // Reset focus?
    if ($(this).data('first-step') === $step.data('step')) {
      $step.find('input').first().focus();
    }
  };

  /**
   * Hide a step and reset any loading classes
   */
  // eslint-disable-next-line no-param-reassign
  $.fn.hideStep = function () {
    if ($(this).hasClass('step--result')) {
      // Handle result steps
      $(this).addClass('decision-tree-step--hidden');

      return;
    }

    // Handle question steps
    const $form = $(this).find('> .decision-tree-step__form');
    $form.addClass('decision-tree-step__form--hidden');
    $form.removeClass('decision-tree-step__form--loading');
  };

  /**
   * Show a step and reset any loading classes
   */
  // eslint-disable-next-line no-param-reassign
  $.fn.showStep = function () {
    if ($(this).hasClass('.step--result')) {
      // Handle result steps
      $(this).removeClass('decision-tree-step--hidden');

      return;
    }

    // Handle question steps
    const $form = $(this).find('> .decision-tree-step__form');
    $form.removeClass('decision-tree-step__form--hidden');
    $form.removeClass('decision-tree-step__form--loading');
  };

  /**
   * Enhance the "progression" of the decision tree, and also
   * listen for the specific moment to handle multiple paging
   */
  // eslint-disable-next-line no-param-reassign
  $.fn.captureProgression = function () {
    const $form = $(this).find('> .decision-tree-step__form');
    const $nextStep = $(this).find('> .nextstep'); // We want this to be parallel with the vendor js
    const $decisionTree = $(this).parents('.decision-tree');
    const pageProgression = $decisionTree.data('page-progression');

    // Indicate loading
    $form.addClass('decision-tree-step__form--loading');

    if (pageProgression === 'multiple') {
      let updateCalled = false;
      // Dive into the dom and see when the vendor js has done its work
      $nextStep.on('DOMSubtreeModified', () => {
        if (updateCalled) {
          return;
        }
        const step = $nextStep.find('.step');

        if (step.length) {
          updateCalled = true;
          // Step has been rendered to the DOM, so let's update the view
          $decisionTree.data('current-step', step.data('step')).updateView();
        }
      });
    }
  };

  /**
   * This is the main behaviour entry point, instigated when
   * the user clicks their way through the decision tree
   */
  $('.decision-tree')
    .on('click', '[data-answer="answer"]', function () {
      // Add some logic before the vendor js applies the change
      $(this).closest('.step').captureProgression();
    })
    .on('click', '[data-action="back"]', function () {
      // Switch to the target step
      $(this).parents('.decision-tree').data('current-step', $(this).data('target-step')).updateView();
    })
    .on('click', '[data-action="restart-tree"]', function () {
      // Switch to the target step
      $(this).parents('.decision-tree').data('current-step', $(this).data('target-step')).updateView();

      // Note: We want to let the event continue its propagation onto
      // functionality from the vendor js
    });
});
