    $(function() {
        $('#container').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Monthly Average Rainfall'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                accessibility: {
                    rangeDescription: 'Range: 2011 to 2015'
                }
            },
            colorAxis: {

                minColor: '#ffeda0',
                maxColor: '#bd0026',

            },

            yAxis: {
                min: 0,
                title: {
                    text: 'Rainfall (mm)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                },
                series: {
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        overflow: "none",
                        align: 'left',
                        inside: true,
                        format: '{series.name}',
                        rotation: 270,
                    },
                    pointStart: 2002,
                    label: {
                        connectorAllowed: false
                    },

                }
            },
            exporting: {
                filename: 'export_xlsx_example',
                xlsx: {
                    worksheet: {
                        autoFitColumns: true,
                        categoryColumn: {
                            title: 'Date',
                            numberFormat: 'yyyy-mm'
                        }
                    },
                    workbook: {
                        fileProperties: {
                            creator: "File Author",
                            company: "File Company",
                            created: new Date(2017, 11, 31)
                        }
                    }
                }
            },


            series: [{
                name: 'Japan',
                data: [10, 71.5, 106.4, 129.2]

            }, {
                name: 'Tokyo ',
                data: [10, 71.5, 106.4, 129.2]

            }]
        })
    })