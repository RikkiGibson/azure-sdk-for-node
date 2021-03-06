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
 * Network Mapping Properties.
 *
 */
class NetworkMappingProperties {
  /**
   * Create a NetworkMappingProperties.
   * @member {string} [state] The pairing state for network mapping.
   * @member {string} [primaryNetworkFriendlyName] The primary network friendly
   * name.
   * @member {string} [primaryNetworkId] The primary network id for network
   * mapping.
   * @member {string} [primaryFabricFriendlyName] The primary fabric friendly
   * name.
   * @member {string} [recoveryNetworkFriendlyName] The recovery network
   * friendly name.
   * @member {string} [recoveryNetworkId] The recovery network id for network
   * mapping.
   * @member {string} [recoveryFabricArmId] The recovery fabric ARM id.
   * @member {string} [recoveryFabricFriendlyName] The recovery fabric friendly
   * name.
   * @member {object} [fabricSpecificSettings] The fabric specific settings.
   * @member {string} [fabricSpecificSettings.instanceType] Polymorphic
   * Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of NetworkMappingProperties
   *
   * @returns {object} metadata of NetworkMappingProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NetworkMappingProperties',
      type: {
        name: 'Composite',
        className: 'NetworkMappingProperties',
        modelProperties: {
          state: {
            required: false,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          },
          primaryNetworkFriendlyName: {
            required: false,
            serializedName: 'primaryNetworkFriendlyName',
            type: {
              name: 'String'
            }
          },
          primaryNetworkId: {
            required: false,
            serializedName: 'primaryNetworkId',
            type: {
              name: 'String'
            }
          },
          primaryFabricFriendlyName: {
            required: false,
            serializedName: 'primaryFabricFriendlyName',
            type: {
              name: 'String'
            }
          },
          recoveryNetworkFriendlyName: {
            required: false,
            serializedName: 'recoveryNetworkFriendlyName',
            type: {
              name: 'String'
            }
          },
          recoveryNetworkId: {
            required: false,
            serializedName: 'recoveryNetworkId',
            type: {
              name: 'String'
            }
          },
          recoveryFabricArmId: {
            required: false,
            serializedName: 'recoveryFabricArmId',
            type: {
              name: 'String'
            }
          },
          recoveryFabricFriendlyName: {
            required: false,
            serializedName: 'recoveryFabricFriendlyName',
            type: {
              name: 'String'
            }
          },
          fabricSpecificSettings: {
            required: false,
            serializedName: 'fabricSpecificSettings',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'instanceType',
                clientName: 'instanceType'
              },
              uberParent: 'NetworkMappingFabricSpecificSettings',
              className: 'NetworkMappingFabricSpecificSettings'
            }
          }
        }
      }
    };
  }
}

module.exports = NetworkMappingProperties;
