console.log("hello cruel world", process.env['exit_code']);
if (process.env['exit_code'] - 0) {
    throw "dying";
}
process.exit(process.env['exit_code']);
