/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the StartTaskInformation class.
 * @constructor
 * Information about a start task running on a compute node.
 * @member {string} state Gets or sets the state of the start task on the
 * compute node. Possible values include: 'running', 'completed'
 * 
 * @member {date} startTime Gets or sets the time at which the start task
 * started running.
 * 
 * @member {date} [endTime] Gets or sets the time at which the start task
 * stopped running.
 * 
 * @member {number} [exitCode] Gets or sets the exit code of the start task.
 * 
 * @member {object} [schedulingError] Gets or sets any error encountered
 * scheduling the start task.
 * 
 * @member {string} [schedulingError.category] Gets or sets the category of
 * the task scheduling error. Possible values include: 'usererror',
 * 'servererror', 'unmapped'
 * 
 * @member {string} [schedulingError.code] Gets or sets an identifier for the
 * task scheduling error.  Codes are invariant and are intended to be
 * consumed programmatically.
 * 
 * @member {string} [schedulingError.message] Gets or sets a message
 * describing the task scheduling error, intended to be suitable for display
 * in a user interface.
 * 
 * @member {array} [schedulingError.details] Gets or sets the list of
 * additional error details related to the scheduling error.
 * 
 * @member {number} retryCount Gets or sets the number of times the task has
 * been retried by the Batch service.
 * 
 * @member {date} [lastRetryTime] Gets or sets the most recent time at which a
 * retry of the task started running.
 * 
 */
function StartTaskInformation() {
}

/**
 * Defines the metadata of StartTaskInformation
 *
 * @returns {object} metadata of StartTaskInformation
 *
 */
StartTaskInformation.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'StartTaskInformation',
    type: {
      name: 'Composite',
      className: 'StartTaskInformation',
      modelProperties: {
        state: {
          required: true,
          serializedName: 'state',
          type: {
            name: 'Enum',
            allowedValues: [ 'running', 'completed' ]
          }
        },
        startTime: {
          required: true,
          serializedName: 'startTime',
          type: {
            name: 'DateTime'
          }
        },
        endTime: {
          required: false,
          serializedName: 'endTime',
          type: {
            name: 'DateTime'
          }
        },
        exitCode: {
          required: false,
          serializedName: 'exitCode',
          type: {
            name: 'Number'
          }
        },
        schedulingError: {
          required: false,
          serializedName: 'schedulingError',
          type: {
            name: 'Composite',
            className: 'TaskSchedulingError'
          }
        },
        retryCount: {
          required: true,
          serializedName: 'retryCount',
          type: {
            name: 'Number'
          }
        },
        lastRetryTime: {
          required: false,
          serializedName: 'lastRetryTime',
          type: {
            name: 'DateTime'
          }
        }
      }
    }
  };
};

module.exports = StartTaskInformation;