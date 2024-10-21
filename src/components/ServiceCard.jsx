import React from "react";
import { Card, Button, List, Typography } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const { Title } = Typography;

const ServiceCard = ( { services } ) => {
    return (
        <>
            {services.map( ( service ) => (
                <div
                    key={service.id}
                    className="min-w-[300px] flex-shrink-0 transition-transform transform hover:scale-105 duration-300"
                >
                    <Card
                        hoverable
                        className="rounded-lg shadow-lg relative"
                        cover={
                            <div className="relative">
                                <img
                                    alt={service.title}
                                    src={service.imgSrc}
                                    className="h-60 w-full object-cover rounded-t-lg"
                                />
                                {/* Title overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-t-lg flex items-end">
                                    <Title
                                        level={4}
                                        className="!text-white p-4"
                                        style={{ marginBottom: 0 }}
                                    >
                                        {service.title}
                                    </Title>
                                </div>
                            </div>
                        }
                    >
                        <div className="p-4">
                            <List
                                dataSource={service.checks}
                                renderItem={( item ) => (
                                    <List.Item className="!flex !justify-start gap-4 !p-0">
                                        <CheckOutlined className="text-teal-500" />
                                        <span className="text-gray-700">{item}</span>
                                    </List.Item>
                                )}
                            />
                            <Button
                                type="primary"
                                className="mt-4 w-full bg-teal-500 border-none"
                            >
                                {service.buttonText}
                            </Button>
                        </div>
                    </Card>
                </div>
            ) )
            }
        </>
    )
}

export default ServiceCard;
