import React from 'react'
import {Form} from '@formio/react'

// gọi api để lấy tt
const FAKE_FORM_DATA = {"display":"form","components":[{"label":"Text Field","labelPosition":"top","placeholder":"","description":"","tooltip":"","prefix":"","suffix":"","widget":{"type":"input"},"inputMask":"","displayMask":"","applyMaskOn":"change","allowMultipleMasks":false,"customClass":"","tabindex":"","autocomplete":"","hidden":false,"hideLabel":false,"showWordCount":false,"showCharCount":false,"mask":false,"autofocus":false,"spellcheck":true,"disabled":false,"tableView":true,"modalEdit":false,"multiple":false,"defaultValue":"","persistent":true,"inputFormat":"plain","protected":false,"dbIndex":false,"case":"","truncateMultipleSpaces":false,"encrypted":false,"redrawOn":"","clearOnHide":true,"customDefaultValue":"","calculateValue":"","calculateServer":false,"allowCalculateOverride":false,"validateOn":"change","validate":{"required":false,"pattern":"","customMessage":"","custom":"","customPrivate":false,"json":"","minLength":"","maxLength":"","strictDateValidation":false,"multiple":false,"unique":false},"unique":false,"errorLabel":"","errors":"","key":"textField","tags":[],"properties":{},"conditional":{"show":null,"when":null,"eq":"","json":""},"customConditional":"","logic":[],"attributes":{},"overlay":{"style":"","page":"","left":"","top":"","width":"","height":""},"type":"textfield","input":true,"refreshOn":"","dataGridLabel":false,"addons":[],"inputType":"text","id":"e7ch0xs"},{"type":"button","label":"Submit","key":"submit","size":"md","block":false,"action":"submit","disableOnInvalid":true,"theme":"primary","id":"eu9bjyc","input":true,"placeholder":"","prefix":"","customClass":"","suffix":"","multiple":false,"defaultValue":null,"protected":false,"unique":false,"persistent":false,"hidden":false,"clearOnHide":true,"refreshOn":"","redrawOn":"","tableView":false,"modalEdit":false,"dataGridLabel":true,"labelPosition":"top","description":"","errorLabel":"","tooltip":"","hideLabel":false,"tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","calculateServer":false,"widget":{"type":"input"},"attributes":{},"validateOn":"change","validate":{"required":false,"custom":"","customPrivate":false,"strictDateValidation":false,"multiple":false,"unique":false},"conditional":{"show":null,"when":null,"eq":""},"overlay":{"style":"","left":"","top":"","width":"","height":""},"allowCalculateOverride":false,"encrypted":false,"showCharCount":false,"showWordCount":false,"properties":{},"allowMultipleMasks":false,"addons":[],"leftIcon":"","rightIcon":""}]}
export const TestForm = () => {
  return (
    <Form form={FAKE_FORM_DATA} onSubmit={(data: any) => console.log(data)}
        // src={} form post action
    />
  )
}
