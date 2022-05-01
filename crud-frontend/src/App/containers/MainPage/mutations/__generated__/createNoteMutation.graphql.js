/**
 * @generated SignedSource<<6851e928cc76431e2f357d100c22420b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type createNoteMutation$variables = {|
  content?: ?string,
|};
export type createNoteMutation$data = {|
  +createNote: ?{|
    +_id: ?string,
    +content: ?string,
  |},
|};
export type createNoteMutation = {|
  variables: createNoteMutation$variables,
  response: createNoteMutation$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "content"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "content",
        "variableName": "content"
      }
    ],
    "concreteType": "Note",
    "kind": "LinkedField",
    "name": "createNote",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createNoteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createNoteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a91c383e999fc12656d5e7ff07695106",
    "id": null,
    "metadata": {},
    "name": "createNoteMutation",
    "operationKind": "mutation",
    "text": "mutation createNoteMutation(\n  $content: String\n) {\n  createNote(content: $content) {\n    _id\n    content\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "adeba3f4c0016f9eb46f2857739341f8";

module.exports = ((node/*: any*/)/*: Mutation<
  createNoteMutation$variables,
  createNoteMutation$data,
>*/);
