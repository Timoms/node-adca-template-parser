/**
 * Open-Source module for common openssl commands.
 *
 * Run every OpenSSL command in Node.js in a handy way.
 *
 * @link   https://github.com/Timoms/adca-template-parser
 * @file
 * @author Timo Heckel
 */
const { spawn } = require("child_process");

const isFunction = (callback) => callback instanceof Function;

/*=================================================
Module Exports
=================================================*/
module.exports.full = function adtparser(callback) {
  const stdout = [];
  const stderr = [];

  if (!isFunction(callback)) {
    throw new Error(
      `Callback must be a function, but got a ${typeof callback}`
    );
  }
  try {
    const adtProcess = spawn(__dirname + "\\bin\\ADCATemplateParser.exe");
    adtProcess.stdout.on("data", (data) => {
      stdout.push(data);
    });

    adtProcess.stderr.on("data", (data) => {
      stderr.push(data);
    });

    returnValue = [];
    adtProcess.on("close", (code) => {
      returnValue["processError"] = stderr.toString();
      returnValue["processOutput"] = stdout.toString();
      returnValue["processExitCode"] = code;
      returnValue["hasError"] = code !== 0;
      callback.call(null, returnValue);
    });

    return adtProcess;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.minified = function adtparser(callback) {
  const stdout = [];
  const stderr = [];

  if (!isFunction(callback)) {
    throw new Error(
      `Callback must be a function, but got a ${typeof callback}`
    );
  }
  try {
    const adtProcess = spawn(__dirname + "\\bin\\ADCATemplateParser.exe", [
      "--m",
    ]);
    adtProcess.stdout.on("data", (data) => {
      stdout.push(data);
    });

    adtProcess.stderr.on("data", (data) => {
      stderr.push(data);
    });

    returnValue = [];
    adtProcess.on("close", (code) => {
      returnValue["processError"] = stderr.toString();
      returnValue["processOutput"] = stdout.toString();
      returnValue["processExitCode"] = code;
      returnValue["hasError"] = code !== 0;
      callback.call(null, returnValue);
    });

    return adtProcess;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.template = function adtparser(template, callback) {
  const stdout = [];
  const stderr = [];

  if (!isFunction(callback)) {
    throw new Error(
      `Callback must be a function, but got a ${typeof callback}`
    );
  }
  try {
    const adtProcess = spawn(__dirname + "\\bin\\ADCATemplateParser.exe", [
      "--t",
      template,
    ]);
    adtProcess.stdout.on("data", (data) => {
      stdout.push(data);
    });

    adtProcess.stderr.on("data", (data) => {
      stderr.push(data);
    });

    returnValue = [];
    adtProcess.on("close", (code) => {
      returnValue["processError"] = stderr.toString();
      returnValue["processOutput"] = stdout.toString();
      returnValue["processExitCode"] = code;
      returnValue["hasError"] = code !== 0;
      callback.call(null, returnValue);
    });

    return adtProcess;
  } catch (error) {
    throw new Error(error);
  }
};
