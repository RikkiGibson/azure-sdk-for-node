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

const models = require('./index');

/**
 * An marketplace resource.
 *
 * @extends models['Resource']
 */
class Marketplace extends models['Resource'] {
  /**
   * Create a Marketplace.
   * @member {string} [billingPeriodId] The id of the billing period resource
   * that the usage belongs to.
   * @member {date} [usageStart] The start of the date time range covered by
   * the usage detail.
   * @member {date} [usageEnd] The end of the date time range covered by the
   * usage detail.
   * @member {number} [resourceRate] The marketplace resource rate.
   * @member {string} [offerName] The type of offer.
   * @member {string} [resourceGroup] The name of resource group.
   * @member {string} [orderNumber] The order number.
   * @member {string} [instanceName] The name of the resource instance that the
   * usage is about.
   * @member {string} [instanceId] The uri of the resource instance that the
   * usage is about.
   * @member {string} [currency] The ISO currency in which the meter is
   * charged, for example, USD.
   * @member {number} [consumedQuantity] The quantity of usage.
   * @member {string} [unitOfMeasure] The unit of measure.
   * @member {number} [pretaxCost] The amount of cost before tax.
   * @member {boolean} [isEstimated] The estimated usage is subject to change.
   * @member {string} [meterId] The meter id.
   * @member {string} [subscriptionGuid] Subscription guid.
   * @member {string} [subscriptionName] Subscription name.
   * @member {string} [accountName] Account name.
   * @member {string} [departmentName] Department name.
   * @member {string} [consumedService] Consumed service name.
   * @member {string} [costCenter] The cost center of this department if it is
   * a department and a costcenter exists
   * @member {string} [additionalProperties] Additional details of this usage
   * item. By default this is not populated, unless it's specified in $expand.
   * @member {string} [publisherName] The name of publisher.
   * @member {string} [planName] The name of plan.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Marketplace
   *
   * @returns {object} metadata of Marketplace
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Marketplace',
      type: {
        name: 'Composite',
        className: 'Marketplace',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            readOnly: true,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          billingPeriodId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.billingPeriodId',
            type: {
              name: 'String'
            }
          },
          usageStart: {
            required: false,
            readOnly: true,
            serializedName: 'properties.usageStart',
            type: {
              name: 'DateTime'
            }
          },
          usageEnd: {
            required: false,
            readOnly: true,
            serializedName: 'properties.usageEnd',
            type: {
              name: 'DateTime'
            }
          },
          resourceRate: {
            required: false,
            readOnly: true,
            serializedName: 'properties.resourceRate',
            type: {
              name: 'Number'
            }
          },
          offerName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.offerName',
            type: {
              name: 'String'
            }
          },
          resourceGroup: {
            required: false,
            readOnly: true,
            serializedName: 'properties.resourceGroup',
            type: {
              name: 'String'
            }
          },
          orderNumber: {
            required: false,
            readOnly: true,
            serializedName: 'properties.orderNumber',
            type: {
              name: 'String'
            }
          },
          instanceName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.instanceName',
            type: {
              name: 'String'
            }
          },
          instanceId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.instanceId',
            type: {
              name: 'String'
            }
          },
          currency: {
            required: false,
            readOnly: true,
            serializedName: 'properties.currency',
            type: {
              name: 'String'
            }
          },
          consumedQuantity: {
            required: false,
            readOnly: true,
            serializedName: 'properties.consumedQuantity',
            type: {
              name: 'Number'
            }
          },
          unitOfMeasure: {
            required: false,
            readOnly: true,
            serializedName: 'properties.unitOfMeasure',
            type: {
              name: 'String'
            }
          },
          pretaxCost: {
            required: false,
            readOnly: true,
            serializedName: 'properties.pretaxCost',
            type: {
              name: 'Number'
            }
          },
          isEstimated: {
            required: false,
            readOnly: true,
            serializedName: 'properties.isEstimated',
            type: {
              name: 'Boolean'
            }
          },
          meterId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.meterId',
            type: {
              name: 'String'
            }
          },
          subscriptionGuid: {
            required: false,
            readOnly: true,
            serializedName: 'properties.subscriptionGuid',
            type: {
              name: 'String'
            }
          },
          subscriptionName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.subscriptionName',
            type: {
              name: 'String'
            }
          },
          accountName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.accountName',
            type: {
              name: 'String'
            }
          },
          departmentName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.departmentName',
            type: {
              name: 'String'
            }
          },
          consumedService: {
            required: false,
            readOnly: true,
            serializedName: 'properties.consumedService',
            type: {
              name: 'String'
            }
          },
          costCenter: {
            required: false,
            readOnly: true,
            serializedName: 'properties.costCenter',
            type: {
              name: 'String'
            }
          },
          additionalProperties: {
            required: false,
            readOnly: true,
            serializedName: 'properties.additionalProperties',
            type: {
              name: 'String'
            }
          },
          publisherName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.publisherName',
            type: {
              name: 'String'
            }
          },
          planName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.planName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Marketplace;