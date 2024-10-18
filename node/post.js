console.log("goodbye cruel world", process.env['post_exit_code']);
if (process.env['post_exit_code']) {
    throw "dying";
}
process.exit(process.env['post_exit_code']);
