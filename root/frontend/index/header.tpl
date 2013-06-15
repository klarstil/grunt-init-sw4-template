{extends file="parent:frontend/index/index.tpl"}

{* Stylesheets *}
{block name="frontend_index_header_css_screen" append}
    <link type="text/css" media="all" rel="stylesheet" href="{link file='frontend/_resources/styles/{%= name %}.css'}" />
{/block}

{* Javascripts *}
{block name="frontend_index_header_javascript_jquery" append}
    <script type="text/javascript" src="{link file='frontend/_resources/javascript/jquery.{%= name %}.js'}"></script>
{/block}

{* Internet explorer specific styles/hacks *}
{block name="frontend_index_header_css_ie" append}
    <!--[if lte IE 8]>
        <link type="text/css" media="all" rel="stylesheet" href="{link file='frontend/_resources/styles/{%= name %}_legacy.css'}" />
    <![endif]-->
{/block}