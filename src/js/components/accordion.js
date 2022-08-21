/* eslint-disable */
import $ from 'jquery';
import 'jquery-ui/ui/widgets/accordion';
/* eslint-enable */

export default function () {
  const accordions = $('.accordion');

  if (accordions.length > 0) {
    accordions.accordion({
      collapsible: true,
      active: false,
    });
  }
}
