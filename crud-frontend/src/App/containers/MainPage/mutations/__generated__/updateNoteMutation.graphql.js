/**
 * @generated SignedSource<<6d3132a9554c840f0a40d7b8c876cd7f>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type updateNoteMutation$variables = {|
  content?: ?string,
  _id?: ?string,
|};
export type updateNoteMutation$data = {|
  +updateNote: ?{|
    +_id: ?string,
    +content: ?string,
  |},
|};
export type updateNoteMutation = {|
  variables: updateNoteMutation$variables,
  response: updateNoteMutation$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "_id"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "content"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "_id"
      },
      {
        "kind": "Variable",
        "name": "content",
        "variableName": "content"
      }
    ],
    "concreteType": "Note",
    "kind": "LinkedField",
    "name": "updateNote",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "updateNoteMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "updateNoteMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "4731bd4beeec173d07fbb688f761b2ef",
    "id": null,
    "metadata": {},
    "name": "updateNoteMutation",
    "operationKind": "mutation",
    "text": "mutation updateNoteMutation(\n  $content: String\n  $_id: ID\n) {\n  updateNote(_id: $_id, content: $content) {\n    _id\n    content\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "243024c90f652d36ad9a87f3847c033b";

module.exports = ((node/*: any*/)/*: Mutation<
  updateNoteMutation$variables,
  updateNoteMutation$data,
>*/);
