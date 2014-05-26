
/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Kill Hermes.
 *
 * @return {Function}
 */

function plugin(){
  return function(robot){
    robot.help('die', 'Kill Hermes. This will restart him if you\'re using '
      + 'upstart or an equivalent.');

    robot.on('mention', /die!?/i, function(){
      process.exit(0);
    });
  };
}