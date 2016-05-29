$('.gasCalculator').each(function() {

  // --------
  // ELEMENTS
  // --------

  var $container = $(this)
  var $riders = $container.find( 'input.numberOfRiders' )
  var $totalMiles = $container.find( 'input.totalMiles' )
  var $mileageRate = $container.find( 'input.mileageRate' )

  // ---------
  // RENDERER
  // ---------

  function showResults() {
    var $total = ( $mileageRate.val() * $totalMiles.val() / $riders.val() )
    $('.results').html(function() {
      return "$" + $total
    })
    if ($total >= 50 ) {
      $('.results').addClass( 'expensive' )
    }
    else {
      $('.results').removeClass( 'expensive' )
    }
  }

  // ----------
  // INITIALIZE
  // ----------

  $('.gasCalculator').on('input', function() {
    showResults()
  })
})
