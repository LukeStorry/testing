import CMS from "netlify-cms-app"
import IndexPagePreview from "./preview-templates/IndexPagePreview"

CMS.init()
CMS.registerPreviewTemplate("index", IndexPagePreview)
