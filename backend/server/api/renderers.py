from rest_framework_xml.renderers import XMLRenderer

class CustomXMLRenderer(XMLRenderer):
    root_tag_name = 'Data'

    def render(self, data, accepted_media_type=None, renderer_context=None):
        xml = super().render(data, accepted_media_type, renderer_context)
        # Replace 'list-item' in different contexts with desired names
        xml = xml.replace('<list-item>', '<Patient>')
        xml = xml.replace('</list-item>', '</Patient>')
        xml = xml.replace('<TestData><Patient>', '<TestData><TestDemographics>')
        xml = xml.replace('</Patient></TestData>', '</TestDemographics></TestData>')
        xml = xml.replace('<ECGData><Patient>', '<ECGData><ECGMeasurements>')
        xml = xml.replace('</Patient></ECGData>', '</ECGMeasurements></ECGData>')
        return xml