/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useRef } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue, refs, set_val } from "/utils/state"
import { Dialog as RadixThemesDialog, Text as RadixThemesText, Theme as RadixThemesTheme } from "@radix-ui/themes"
import env from "/env.json"
import { Avatar, Box, Breadcrumb, BreadcrumbItem, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, FormControl, Heading, HStack, Image as ChakraImage, Input, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack } from "@chakra-ui/react"
import { CloseIcon, DeleteIcon, HamburgerIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import "@radix-ui/themes/styles.css"
import theme from "/utils/theme.js"
import { SpinningCircles } from "react-loading-icons"
import NextHead from "next/head"



export function Fragment_1762bb90abdb81b879b2a22edbbe01a1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <RadixThemesDialog.Root open={connectError !== null}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Formcontrol_5084c18952b7c39b5bec8f02edf6d862 () {
  const ref_question = useRef(null); refs['ref_question'] = ref_question;
  const state__state = useContext(StateContexts.state__state)


  return (
    <FormControl isDisabled={state__state.processing}>
  <HStack sx={{"alignItems": "center", "justifyContent": "space-between"}}>
  <Input id={`question`} placeholder={`Type something...`} ref={ref_question} sx={{"background": "#776885", "borderColor": "#fff3", "borderWidth": "1px", "p": "4", "_placeholder": {"color": "#fffa"}, "_hover": {"borderColor": "#fffa"}}}/>
  <Button sx={{"background": "#5F1A37", "borderColor": "#fff3", "borderWidth": "1px", "p": "4", "_hover": {"background": "#5F1A37"}, "shadow": "rgba(95, 26, 55, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(119, 104, 133, 0.35) 0px -2px 6px 0px inset;", "color": "#fff"}} type={`submit`}>
  <Fragment_182d151165b9fcd42b0e3549d1665960/>
</Button>
</HStack>
</FormControl>
  )
}

export function Box_de8d1da301b8ff2988f7743af670d215 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Box>
  {state__state.chats[state__state.current_chat].map((qa, index_0d016a16aef633846210548c91cfa43a) => (
  <Box key={index_0d016a16aef633846210548c91cfa43a} sx={{"width": "100%"}}>
  <Box sx={{"textAlign": "right", "marginTop": "1em"}}>
  <Text sx={{"background": "#fff3", "shadow": "rgba(4, 3, 15, 0.15) 0px 48px 100px 0px;", "display": "inline-block", "p": "4", "borderRadius": "xl", "maxW": "30em"}}>
  {qa.question}
</Text>
</Box>
  <Box sx={{"textAlign": "left", "paddingTop": "1em"}}>
  <Text sx={{"background": "#776885", "shadow": "rgba(4, 3, 15, 0.15) 0px 48px 100px 0px;", "display": "inline-block", "p": "4", "borderRadius": "xl", "maxW": "30em"}}>
  {qa.answer}
</Text>
</Box>
</Box>
))}
</Box>
  )
}

export function Box_e4e8fe82470d524664065b9cae8cd032 () {
  
    const handleSubmit_638d30da4213976749e40d45908448f9 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{"question": getRefValue(refs['ref_question'])}}

        addEvents([Event("state.state.process_question", {form_data:form_data})])

        if (true) {
            $form.reset()
        }
    })
    
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Box as={`form`} onSubmit={handleSubmit_638d30da4213976749e40d45908448f9} sx={{"width": "100%"}}>
  <Formcontrol_5084c18952b7c39b5bec8f02edf6d862/>
</Box>
  )
}

export function Closeicon_11ed883525187cdaad471aef955f22dd () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_2905983f8758758258aab6a80fcc9a4c = useCallback((_e) => addEvents([Event("state.state.toggle_drawer", {})], (_e), {}), [addEvents, Event])

  return (
    <CloseIcon onClick={on_click_2905983f8758758258aab6a80fcc9a4c} sx={{"fontSize": "md", "color": "#fff8", "_hover": {"color": "#fff"}, "cursor": "pointer", "w": "8"}}/>
  )
}

export function Button_55095af02be38f3f2b64d3e413eaca13 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_e9416bfe015c0fd3bcfc5ccef2e35037 = useCallback((_e) => addEvents([Event("state.state.toggle_modal", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_e9416bfe015c0fd3bcfc5ccef2e35037} sx={{"background": "#5F1A37", "px": "4", "py": "2", "h": "auto", "shadow": "rgba(95, 26, 55, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(119, 104, 133, 0.35) 0px -2px 6px 0px inset;", "color": "#fff", "_hover": {"background": "#5F1A37"}}}>
  {`+ New Edit`}
</Button>
  )
}

export function Vstack_71405e98f3b4dcaf6aead830fe7f970a () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__state = useContext(StateContexts.state__state)


  return (
    <VStack alignItems={`stretch`} sx={{"alignItems": "stretch", "justifyContent": "space-between"}}>
  {state__state.chat_titles.map((chat, index_a879abb76c072a4e28905c11f7afad97) => (
  <HStack key={index_a879abb76c072a4e28905c11f7afad97} sx={{"color": "#fff", "cursor": "pointer"}}>
  <Box onClick={(_e) => addEvents([Event("state.state.set_chat", {chat_name:chat})], (_e), {})} sx={{"border": "double 1px transparent;", "borderRadius": "10px;", "backgroundImage": "linear-gradient(#04030F, #04030F), radial-gradient(circle at top left, #776885,#5F1A37);", "backgroundOrigin": "border-box;", "backgroundClip": "padding-box, border-box;", "p": "2", "_hover": {"backgroundImage": "linear-gradient(#04030F, #04030F), radial-gradient(circle at top left, #776885,#776885);"}, "color": "#fff8", "flex": "1"}}>
  {chat}
</Box>
  <Box sx={{"border": "double 1px transparent;", "borderRadius": "10px;", "backgroundImage": "linear-gradient(#04030F, #04030F), radial-gradient(circle at top left, #776885,#5F1A37);", "backgroundOrigin": "border-box;", "backgroundClip": "padding-box, border-box;", "p": "2", "_hover": {"backgroundImage": "linear-gradient(#04030F, #04030F), radial-gradient(circle at top left, #776885,#776885);"}}}>
  <DeleteIcon onClick={(_e) => addEvents([Event("state.state.delete_chat", {})], (_e), {})} sx={{"fontSize": "md", "color": "#fff8", "_hover": {"color": "#fff"}, "cursor": "pointer", "w": "8"}}/>
</Box>
</HStack>
))}
</VStack>
  )
}

export function Text_329229aa15fcc43d0078f987bf0257b6 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"size": "sm", "fontWeight": "normal"}}>
  {state__state.current_chat}
</Text>
  )
}

export function Modal_58b30a5e509119f576a88a3474d0c6cc () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Modal isOpen={state__state.modal_open}>
  <ModalOverlay>
  <ModalContent sx={{"background": "#04030F", "color": "#fff"}}>
  <ModalHeader>
  <HStack alignItems={`center`} justifyContent={`space-between`} sx={{"alignItems": "center", "justifyContent": "space-between"}}>
  <Text>
  {`Create new chat`}
</Text>
  <Closeicon_c90c6601ae2cde3940fecab2e59b2ad0/>
</HStack>
</ModalHeader>
  <ModalBody>
  <Input_2423e72713f533e48a2897d02518bd8c/>
</ModalBody>
  <ModalFooter>
  <Button_f61fe1fd752ac359cee63af6064ca229/>
</ModalFooter>
</ModalContent>
</ModalOverlay>
</Modal>
  )
}

export function Drawer_1f9568ad74a74f7ce8eb9650fe6f8752 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Drawer isOpen={state__state.drawer_open} placement={`left`}>
  <DrawerOverlay>
  <DrawerContent sx={{"background": "#04030F", "color": "#fff", "opacity": "0.9"}}>
  <DrawerHeader>
  <HStack sx={{"alignItems": "center", "justifyContent": "space-between"}}>
  <Text>
  {`Chats`}
</Text>
  <Closeicon_11ed883525187cdaad471aef955f22dd/>
</HStack>
</DrawerHeader>
  <DrawerBody>
  <Vstack_71405e98f3b4dcaf6aead830fe7f970a/>
</DrawerBody>
</DrawerContent>
</DrawerOverlay>
</Drawer>
  )
}

export function Fragment_182d151165b9fcd42b0e3549d1665960 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Fragment>
  {isTrue(state__state.processing) ? (
  <Fragment>
  <SpinningCircles height={`1em`}/>
</Fragment>
) : (
  <Fragment>
  <Text>
  {`Process`}
</Text>
</Fragment>
)}
</Fragment>
  )
}

export function Button_f61fe1fd752ac359cee63af6064ca229 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_65775bd3c3ca6de4793090251b518aa6 = useCallback((_e) => addEvents([Event("state.state.create_chat", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_65775bd3c3ca6de4793090251b518aa6} sx={{"background": "#5F1A37", "boxShadow": "md", "px": "4", "py": "2", "h": "auto", "_hover": {"background": "#776885"}, "shadow": "rgba(95, 26, 55, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(119, 104, 133, 0.35) 0px -2px 6px 0px inset;", "color": "#fff"}}>
  {`Create`}
</Button>
  )
}

export function Input_2423e72713f533e48a2897d02518bd8c () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_blur_655009403944aacdde6d38e4aa5f79da = useCallback((_e0) => addEvents([Event("state.state.set_new_chat_name", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <Input onBlur={on_blur_655009403944aacdde6d38e4aa5f79da} placeholder={`Type something...`} sx={{"background": "#776885", "borderColor": "#5F1A37", "_placeholder": {"color": "#776885"}}}/>
  )
}

export function Hamburgericon_c98271a08d187d17b68bd3253ad088ed () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_2905983f8758758258aab6a80fcc9a4c = useCallback((_e) => addEvents([Event("state.state.toggle_drawer", {})], (_e), {}), [addEvents, Event])

  return (
    <HamburgerIcon onClick={on_click_2905983f8758758258aab6a80fcc9a4c} sx={{"mr": 4, "cursor": "pointer"}}/>
  )
}

export function Closeicon_c90c6601ae2cde3940fecab2e59b2ad0 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_e9416bfe015c0fd3bcfc5ccef2e35037 = useCallback((_e) => addEvents([Event("state.state.toggle_modal", {})], (_e), {}), [addEvents, Event])

  return (
    <CloseIcon onClick={on_click_e9416bfe015c0fd3bcfc5ccef2e35037} sx={{"fontSize": "sm", "color": "#fff8", "_hover": {"color": "#fff"}, "cursor": "pointer"}}/>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <VStack alignItems={`stretch`} spacing={`0`} sx={{"background": "#04030F", "color": "#fff", "minH": "100vh", "alignItems": "stretch", "justifyContent": "space-between"}}>
  <Box sx={{"background": "#04030F", "backdropFilter": "auto", "backdropBlur": "lg", "p": "4", "borderBottom": "1px solid #fff3", "position": "sticky", "top": "0", "zIndex": "100"}}>
  <HStack justify={`space-between`} sx={{"alignItems": "center", "justifyContent": "space-between"}}>
  <HStack sx={{"alignItems": "center", "justifyContent": "space-between"}}>
  <Hamburgericon_c98271a08d187d17b68bd3253ad088ed/>
  <Link as={NextLink} href={`/`}>
  <Box sx={{"p": "1", "borderRadius": "6", "background": "#F0F0F0", "mr": "2"}}>
  <ChakraImage src={`favicon.ico`} sx={{"width": 30, "height": "auto"}}/>
</Box>
</Link>
  <Breadcrumb>
  <BreadcrumbItem>
  <Heading size={`sm`}>
  {`prod.ai`}
</Heading>
</BreadcrumbItem>
  <BreadcrumbItem>
  <Text_329229aa15fcc43d0078f987bf0257b6/>
</BreadcrumbItem>
</Breadcrumb>
</HStack>
  <HStack spacing={`8`} sx={{"alignItems": "center", "justifyContent": "space-between"}}>
  <Button_55095af02be38f3f2b64d3e413eaca13/>
  <Menu sx={{"background": "#04030F", "border": "red"}}>
  <MenuButton>
  <Avatar name={`User`} size={`md`} sx={{"shadow": "rgba(95, 26, 55, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(119, 104, 133, 0.35) 0px -2px 6px 0px inset;", "color": "#fff", "background": "#776885"}}/>
  <Box/>
</MenuButton>
  <MenuList sx={{"background": "#04030F", "border": "1.5px solid #5F1A37"}}>
  <MenuItem sx={{"background": "#04030F", "color": "#fff"}}>
  {`Help`}
</MenuItem>
  <MenuDivider sx={{"border": "1px solid #5F1A37"}}/>
  <MenuItem sx={{"background": "#04030F", "color": "#fff"}}>
  {`Settings`}
</MenuItem>
</MenuList>
</Menu>
</HStack>
</HStack>
</Box>
  <VStack sx={{"py": "8", "flex": "1", "width": "100%", "maxW": "3xl", "paddingInlineStart": "4", "paddingInlineEnd": "4", "alignSelf": "center", "overflow": "hidden", "paddingBottom": "5em", "alignItems": "stretch", "justifyContent": "space-between"}}>
  <Box_de8d1da301b8ff2988f7743af670d215/>
</VStack>
  <Box sx={{"position": "sticky", "bottom": "0", "left": "0", "py": "4", "backdropFilter": "auto", "backdropBlur": "lg", "alignItems": "stretch", "width": "100%", "background": "rgba(255,255,255, 0.1)"}}>
  <VStack sx={{"width": "100%", "maxW": "3xl", "mx": "auto", "alignItems": "stretch", "justifyContent": "space-between"}}>
  <Box_e4e8fe82470d524664065b9cae8cd032/>
</VStack>
</Box>
  <Drawer_1f9568ad74a74f7ce8eb9650fe6f8752/>
  <Modal_58b30a5e509119f576a88a3474d0c6cc/>
</VStack>
  <NextHead>
  <title>
  {`prod.ai`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
