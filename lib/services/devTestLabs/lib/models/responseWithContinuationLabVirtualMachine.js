/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The response of a list operation.
 */
class ResponseWithContinuationLabVirtualMachine extends Array {
  /**
   * Create a ResponseWithContinuationLabVirtualMachine.
   * @member {string} [nextLink] Link for next set of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ResponseWithContinuationLabVirtualMachine
   *
   * @returns {object} metadata of ResponseWithContinuationLabVirtualMachine
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResponseWithContinuation_LabVirtualMachine_',
      type: {
        name: 'Composite',
        className: 'ResponseWithContinuationLabVirtualMachine',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LabVirtualMachineElementType',
                  type: {
                    name: 'Composite',
                    className: 'LabVirtualMachine'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ResponseWithContinuationLabVirtualMachine;
