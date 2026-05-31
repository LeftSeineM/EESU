from __future__ import annotations

import html
import zipfile
from pathlib import Path


OUT = Path("docs/EE_Student_Union_网站定位说明.docx")


def esc(text: str) -> str:
    return html.escape(text, quote=False)


def p(text: str = "", style: str | None = None, runs: list[tuple[str, dict]] | None = None) -> str:
    style_xml = f'<w:pStyle w:val="{style}"/>' if style else ""
    if runs is None:
        runs = [(text, {})]
    run_xml = "".join(run(t, **props) for t, props in runs)
    return f"<w:p><w:pPr>{style_xml}</w:pPr>{run_xml}</w:p>"


def list_p(text: str) -> str:
    return (
        '<w:p><w:pPr><w:pStyle w:val="ListParagraph"/>'
        '<w:numPr><w:ilvl w:val="0"/><w:numId w:val="1"/></w:numPr>'
        '</w:pPr>'
        f"{run(text)}</w:p>"
    )


def run(text: str, bold: bool = False, color: str | None = None) -> str:
    props = []
    if bold:
        props.append("<w:b/>")
    if color:
        props.append(f'<w:color w:val="{color}"/>')
    rpr = f"<w:rPr>{''.join(props)}</w:rPr>" if props else ""
    return f"<w:r>{rpr}<w:t>{esc(text)}</w:t></w:r>"


def heading(text: str, level: int) -> str:
    return p(text, style=f"Heading{level}")


def table(rows: list[list[str]], widths: list[int]) -> str:
    grid = "".join(f'<w:gridCol w:w="{w}"/>' for w in widths)
    trs = []
    for ridx, row in enumerate(rows):
        cells = []
        for text, width in zip(row, widths):
            fill = '<w:shd w:fill="E8EEF5"/>' if ridx == 0 else ""
            cells.append(
                "<w:tc>"
                f'<w:tcPr><w:tcW w:w="{width}" w:type="dxa"/>{fill}'
                '<w:tcMar><w:top w:w="100" w:type="dxa"/><w:bottom w:w="100" w:type="dxa"/>'
                '<w:start w:w="140" w:type="dxa"/><w:end w:w="140" w:type="dxa"/></w:tcMar>'
                "</w:tcPr>"
                + p("", runs=[(text, {"bold": ridx == 0})])
                + "</w:tc>"
            )
        trs.append(f"<w:tr>{''.join(cells)}</w:tr>")
    return (
        "<w:tbl><w:tblPr><w:tblW w:w=\"9360\" w:type=\"dxa\"/>"
        "<w:tblInd w:w=\"120\" w:type=\"dxa\"/>"
        '<w:tblBorders><w:top w:val="single" w:sz="4" w:space="0" w:color="D9E2EC"/>'
        '<w:left w:val="single" w:sz="4" w:space="0" w:color="D9E2EC"/>'
        '<w:bottom w:val="single" w:sz="4" w:space="0" w:color="D9E2EC"/>'
        '<w:right w:val="single" w:sz="4" w:space="0" w:color="D9E2EC"/>'
        '<w:insideH w:val="single" w:sz="4" w:space="0" w:color="D9E2EC"/>'
        '<w:insideV w:val="single" w:sz="4" w:space="0" w:color="D9E2EC"/></w:tblBorders>'
        "</w:tblPr>"
        f"<w:tblGrid>{grid}</w:tblGrid>{''.join(trs)}</w:tbl>"
    )


def document_xml() -> str:
    parts = [
        p(
            "",
            style="Title",
            runs=[("EE Student Union 网站定位说明", {"bold": True, "color": "0B2545"})],
        ),
        p("荣誉展示墙 · 工作留痕 · 四个大家庭的永久档案", style="Subtitle"),
        p("版本：2026-05-31    适用对象：清华大学电子系学生会展示站建设讨论"),
        heading("一、网站定位", 1),
        p(
            "EE Student Union 网站的核心定位，是为清华大学电子系学生会建设一个面向展示、传承与沉淀的荣誉展示墙。"
            "它不以报名、资源申请、事务办理等实用功能为第一目标，而是以活动记录、荣誉呈现、组织记忆和工作留痕为中心，"
            "把学生会长期积累的每一次付出、每一份成果、每一张合影、每一个高光时刻稳定地保存下来。"
        ),
        p(
            "这个平台希望回答一个更朴素的问题：当一届又一届同学离开之后，我们如何仍然看见他们曾经怎样组织活动、怎样服务同学、"
            "怎样把电子系学生会做成一个有温度、有战斗力、也有共同记忆的集体。"
        ),
        heading("二、建设愿景", 1),
        list_p("做一面属于电子系学生会的荣誉展示墙，让优秀活动和团队成果被清楚看见。"),
        list_p("做一套面向四个大家庭的公共档案，把文艺、体育、联络、权发的工作都纳入同一套展示体系。"),
        list_p("做一个长期可维护的平台，让每届学生会都能继续补充照片、文字、奖项、项目和复盘。"),
        list_p("做一份组织记忆的容器，让同学们离开岗位之后，仍然能在这里看到自己留下的痕迹。"),
        heading("三、四个大家庭", 1),
        table(
            [
                ["大家庭", "展示重点", "留痕内容"],
                ["文艺中心", "学生节、系歌赛、舞会、摄影赛事等文艺舞台", "舞台照片、节目记录、活动回顾、幕后分工、获奖与亮点"],
                ["体育中心", "大无限杯、马约翰杯、代表队与体育活动", "赛事成绩、队伍合影、赛程记录、训练瞬间、体育荣誉"],
                ["联络中心", "名企微体验、福利支持、外部交流、学代会协助", "企业参访、期末福袋、微沙龙、合作记录、会议服务"],
                ["权发中心", "权益发展、成长支持、反馈沟通和长期建设", "课程研讨、权益声音、成长项目、反馈闭环、长期建设成果"],
            ],
            [1700, 3600, 4060],
        ),
        heading("四、核心功能倾向", 1),
        heading("1. 荣誉展示", 2),
        p(
            "网站应优先展示可被快速感知的荣誉和成果，例如赛事奖项、品牌活动、重要节点、代表性照片、参与人数和组织影响。"
            "这些内容适合放在首页、活动档案页和各中心专题页中，让访问者第一眼看到电子系学生会的生命力。"
        ),
        heading("2. 活动档案", 2),
        p(
            "每个活动都应尽量保留基础信息：活动名称、所属中心、时间或届次、活动简介、照片、亮点、成果、后续可补充的复盘链接。"
            "短期可以先做静态展示，长期再考虑结构化后台。"
        ),
        heading("3. 工作留痕", 2),
        p(
            "平台不是只展示最后的光鲜结果，也应该给幕后工作留下位置。策划、沟通、排练、训练、物料、赞助、现场执行和复盘，"
            "这些看似琐碎的环节共同构成学生会真正的组织能力。"
        ),
        heading("4. 永久保存", 2),
        p(
            "网站采用静态页面发布，适合长期保存和低成本维护。每一次更新都可以通过 Git 记录留下版本痕迹，"
            "让活动资料不仅存在于聊天记录和临时网盘里，也进入一个稳定、可追溯、可公开访问的档案空间。"
        ),
        heading("五、内容组织建议", 1),
        list_p("首页：展示 EE Student Union 的整体气质、四个大家庭入口、精选荣誉与活动切片。"),
        list_p("活动档案页：按照舞台、赛场、联络、成长等维度整合代表性活动。"),
        list_p("中心专题页：文艺、体育、联络、权发分别拥有独立页面，突出各自传统和代表项目。"),
        list_p("资料来源页：记录电子系官网、无线之声公众号、活动相册等来源，后续补充授权说明。"),
        list_p("联络旧站入口：保留原 EELL 联络中心站点，作为联络中心专题下的历史归档。"),
        heading("六、下一步建设重点", 1),
        list_p("补充真实照片：优先收集学生节、马杯、系歌赛、名企微体验、权发项目等高清图片。"),
        list_p("补充公众号材料：将“无线之声”相关文章链接、封面图和活动图文整理进素材库。"),
        list_p("建立活动条目模板：统一活动标题、时间、中心、简介、成果、图片、来源和负责人占位。"),
        list_p("形成年度更新机制：每个中心每学期至少补充若干代表性活动，保证平台持续生长。"),
        heading("结语", 1),
        p(
            "EE Student Union 不只是一个网站，更像是一面长期生长的墙。它连接电子系学生会的四个大家庭，"
            "把热闹的活动、安静的筹备、并肩作战的同学和属于电子系的荣誉放在同一个地方。"
            "当每一份工作都被留下，每一份荣誉都被保存，学生会的传承就不再只依赖口口相传，而会成为可被看见、可被访问、可被继续书写的公共记忆。"
        ),
        '<w:sectPr><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="708" w:footer="708" w:gutter="0"/></w:sectPr>',
    ]
    body = "".join(parts)
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" '
        'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">'
        f"<w:body>{body}</w:body></w:document>"
    )


CONTENT_TYPES = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
  <Override PartName="/word/numbering.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>"""

ROOT_RELS = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>"""

DOC_RELS = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering" Target="numbering.xml"/>
</Relationships>"""

STYLES = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:style w:type="paragraph" w:default="1" w:styleId="Normal">
    <w:name w:val="Normal"/><w:qFormat/>
    <w:pPr><w:spacing w:after="160" w:line="320" w:lineRule="auto"/></w:pPr>
    <w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Microsoft YaHei"/><w:sz w:val="22"/></w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="Title">
    <w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:qFormat/>
    <w:pPr><w:spacing w:before="0" w:after="160"/></w:pPr>
    <w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Microsoft YaHei"/><w:b/><w:color w:val="0B2545"/><w:sz w:val="40"/></w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="Subtitle">
    <w:name w:val="Subtitle"/><w:basedOn w:val="Normal"/><w:qFormat/>
    <w:pPr><w:spacing w:after="240"/></w:pPr>
    <w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Microsoft YaHei"/><w:color w:val="555555"/><w:sz w:val="24"/></w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="Heading1">
    <w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:qFormat/>
    <w:pPr><w:keepNext/><w:spacing w:before="360" w:after="200"/></w:pPr>
    <w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Microsoft YaHei"/><w:b/><w:color w:val="2E74B5"/><w:sz w:val="32"/></w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="Heading2">
    <w:name w:val="heading 2"/><w:basedOn w:val="Normal"/><w:qFormat/>
    <w:pPr><w:keepNext/><w:spacing w:before="240" w:after="120"/></w:pPr>
    <w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Microsoft YaHei"/><w:b/><w:color w:val="2E74B5"/><w:sz w:val="26"/></w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="ListParagraph">
    <w:name w:val="List Paragraph"/><w:basedOn w:val="Normal"/><w:qFormat/>
    <w:pPr><w:spacing w:after="80" w:line="290" w:lineRule="auto"/></w:pPr>
  </w:style>
</w:styles>"""

NUMBERING = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:numbering xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:abstractNum w:abstractNumId="0">
    <w:lvl w:ilvl="0">
      <w:start w:val="1"/><w:numFmt w:val="bullet"/><w:lvlText w:val="•"/>
      <w:pPr><w:ind w:left="540" w:hanging="270"/></w:pPr>
      <w:rPr><w:rFonts w:ascii="Symbol" w:hAnsi="Symbol"/></w:rPr>
    </w:lvl>
  </w:abstractNum>
  <w:num w:numId="1"><w:abstractNumId w:val="0"/></w:num>
</w:numbering>"""

CORE = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>EE Student Union 网站定位说明</dc:title>
  <dc:creator>Codex</dc:creator>
  <cp:lastModifiedBy>Codex</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">2026-05-31T00:00:00Z</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">2026-05-31T00:00:00Z</dcterms:modified>
</cp:coreProperties>"""

APP = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
  <Application>Codex</Application>
</Properties>"""


def main() -> None:
    OUT.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED) as z:
        z.writestr("[Content_Types].xml", CONTENT_TYPES)
        z.writestr("_rels/.rels", ROOT_RELS)
        z.writestr("word/_rels/document.xml.rels", DOC_RELS)
        z.writestr("word/document.xml", document_xml())
        z.writestr("word/styles.xml", STYLES)
        z.writestr("word/numbering.xml", NUMBERING)
        z.writestr("docProps/core.xml", CORE)
        z.writestr("docProps/app.xml", APP)
    print(OUT)


if __name__ == "__main__":
    main()
