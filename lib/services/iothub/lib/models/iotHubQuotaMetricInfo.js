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
 * @class
 * Initializes a new instance of the IotHubQuotaMetricInfo class.
 * @constructor
 * The properties related to quota metrics.
 *
 * @member {string} [name] The name of the quota metric.
 * 
 * @member {number} [currentValue] The current value for the quota metric.
 * 
 * @member {number} [maxValue] The maximum value of the quota metric.
 * 
 */
function IotHubQuotaMetricInfo() {
}

/**
 * Defines the metadata of IotHubQuotaMetricInfo
 *
 * @returns {object} metadata of IotHubQuotaMetricInfo
 *
 */
IotHubQuotaMetricInfo.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'IotHubQuotaMetricInfo',
    type: {
      name: 'Composite',
      className: 'IotHubQuotaMetricInfo',
      modelProperties: {
        name: {
          required: false,
          serializedName: 'Name',
          type: {
            name: 'String'
          }
        },
        currentValue: {
          required: false,
          serializedName: 'CurrentValue',
          type: {
            name: 'Number'
          }
        },
        maxValue: {
          required: false,
          serializedName: 'MaxValue',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = IotHubQuotaMetricInfo;